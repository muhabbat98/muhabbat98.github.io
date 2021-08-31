import React,{useState,useEffect} from 'react'
import Marker from './marker.svg'
import { axios, useActionCreators, useSelector } from "../../../hooks";
import { AlertPosition } from "../../../utils/alert-position-enum";
import { YMaps, Map,Placemark,ZoomControl,SearchControl,GeolocationControl,GeoObject } from 'react-yandex-maps';

interface Location{
    setLocation?:any;
    defaultCordinate?:any;
    setData?:any
}
const YandexMap: React.FC<Location> = ({setLocation,defaultCordinate,setData}) => {
    const [geometry,setgeometry] = useState<any>(defaultCordinate ? defaultCordinate:[41.31207798268884, 69.24238483965644]);
    const { setAlertMessage } = useActionCreators();
    // useEffect(()=>{
    //     setgeometry();
    // },[]);

    useEffect(()=>{
        getAdd()
    },[geometry])
    let doc:any;
    const getAddress = (e:any) => {
        setData({
            country:"",
            city:"",
            district:"",
            homeNumber:"",
            street:"",
        })
        setgeometry(e.get('target').geometry.getCoordinates());
        setLocation(e.get('target').geometry.getCoordinates());
        console.log("h--->",e.get('target').geometry.getCoordinates())
        // setLocation({latitude:geometry[0],longitude:geometry[1]});
    }

    // console.log("geo-->",geometry);
    // console.log("ge-->",geometry[0],geometry[1]);
    // console.log("tt-->",state)
   
    

    const searchText = (text:any, key:any) => {
        const temp = text && text.toLowerCase().includes(key);
        return temp;
    }

    const  getAdd = async () =>{ 
        try{
        const data = await axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=e29642df-87bb-4b68-80a4-eecf4e8b1b64&geocode=${geometry[1]},${geometry[0]}`);
        const parser = new DOMParser();  
        doc = parser.parseFromString(data.data, 'text/xml')
        // console.log('rrrr-->',doc)
        }
        catch(error){
            if (error.debugMessage) {
                setAlertMessage({
                  message: error.debugMessage,
                  type: 'error',
                  position: AlertPosition.TOP_LEFT
                });
            } else {
                setAlertMessage({
                  message: error.message,
                  type: 'error',
                  position: AlertPosition.TOP_LEFT
                });
            }
        }

        // featureMember
        const x = doc.getElementsByTagName("featureMember")[0] 
        ? doc.getElementsByTagName("featureMember")[0]
            .getElementsByTagName("text")[0]
            .childNodes[0]
            .nodeValue:",,,,,,,"; 
        const x2 = doc.getElementsByTagName("featureMember")[1] 
        ? doc.getElementsByTagName("featureMember")[1]
            .getElementsByTagName("text")[0]
            .childNodes[0]
            .nodeValue:",,,,,,,"; 
        const y=x.split(",");
        const y2=x2.split(",");
        setData && setData({
            country:y2[0],
            city:y2[1],
            district:searchText(y2[2],"район")?y2[2]:"",
            homeNumber:y[4]?y[4]:"",
            street:searchText(y[2],"улица")?y[2]:"",
        })
        // console.log("x == ", x.split(","));
        // console.log("x2 === ", x2.split(","))
    }
    
    return (
        <YMaps
        
            enterprise={true}
            query={{
                lang:'ru_RU',
                apikey: 'e29642df-87bb-4b68-80a4-eecf4e8b1b64',
        }}
        >
            <Map
                // modules={["Placemark", "geocode", "geoObject.addon.balloon"]}
                width={'100%'}
                height={'100%'}
                defaultState={{
                center: [41.31207798268884, 69.24238483965644],
                zoom: 8,
                behaviors: ["default", "scrollZoom"],
                controls: [],
                yandexMapDisablePoiInteractivity: true,
                }}
                options={{
                    mapAutoFocus:true,
                }}
                // panes={(e:any)=>console.log(e.get('events').getElement().style)}

            >
                <Placemark 
                    onDragEnd={(e:any) => getAddress(e)}
                    geometry={geometry}
                    options={{
                        draggable: true,
                        // hasBallon:true,
                        iconLayout: 'default#image',
                        iconImageHref:`${Marker}`,
                        iconImageSize: [40, 40],
                        // pane:"right",
                        // iconImageOffset: [-50, -18],
                        // useMapMarginInDragging:true

                        
                    }}
                    
                
                />
        
                <GeolocationControl />
                <GeoObject/>
                <ZoomControl options={
                    { 
                        float: 'left',
                        size:'small'
                        }} />
                <SearchControl options={{ float: 'right' }} />
            </Map>
        </YMaps>
    )
}

export default React.memo(YandexMap);