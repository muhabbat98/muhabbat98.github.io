import React, { useState, useEffect, useRef } from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios'
import { useMutation, useQuery } from '@apollo/client'
import {  BOOKROUTE } from '../../../settings/url.js'
import { CREATE_JOURNAL } from '../../../Graphql/Mutation/'
import { JOURNAL_NAME } from '../../../Graphql/Query'




const useStyles = makeStyles((theme) => ({
    journal_top:{
        marginTop:'3rem',
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },

}));

export default function Sience() {
    const classes = useStyles()
    const [open, setOpen] = useState(false);
    const {data:journalNames, loading:journalWaiting} = useQuery(JOURNAL_NAME)
    const [createJournal, { data, loading, error }] = useMutation( CREATE_JOURNAL)

    const [enterence, setEnterence] = useState({       
        fileId: '',
        date: '',
        serialNumber:1,
        year:1,
        journalId:1
    })
  
    const bookUpload = useRef()
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    useEffect(() => {
        if (error) alert(error.message)
        else if (data) {
            console.log(data)
            setOpen(true)
            bookUpload.current.value = ''
        }
    }, [error, data])
    const sendScience = () => {
      
        if (enterence.serialNumber) {
            createJournal({
                variables:{
                    name: enterence.title,
                    serialNumber: enterence.serialNumber,
                    year:enterence.year,
                    fileId:enterence.fileId,
                    generalId:enterence.journalId,
                    date:enterence.date
                }
            })
          
        }
        else {
            alert("enter required fields")
        }
    }
  
    const sendBook = (e) => {
        
        if (bookUpload.current.files.length) {
            const formData = new FormData()
            formData.append('book', bookUpload.current.files[0])
            try {
                axios({
                    method: "POST",
                    url: BOOKROUTE,
                    data: formData,
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }).then(res => {
                    setEnterence({ ...enterence, fileId: res.data.file_id })
                })
            }
            catch (err) {
                alert(err.message)
            }
        }
    }
  
    return (<>
        {
            loading||journalWaiting ?
                <Backdrop open={true} className={classes.backdrop} >
                    <CircularProgress color="inherit" />
                </Backdrop> :
                <></>
        }
        <Typography className={classes.journal_top} variant="h3" color='primary' gutterBottom>
           Create Journal 
        </Typography>

        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message={data && data.createJournal&&data.createJournal.message}
            action={
                <React.Fragment>
                    <Button color="secondary" size="small" onClick={handleClose}>
                        OK
                    </Button>
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </React.Fragment>
            }
        />
        <div className="container science-input">
            <div className="input-element">
                <label>JOURNAL NAME</label>
                    {
                        journalNames&&journalNames.journals ?
                            <select  className="journal_names_select" onClick={(e)=>setEnterence({ ...enterence, journalId: parseInt(e.target.value) })}>
                               { journalNames.journals.map((element, index)=><option value={element.id} key={index}>{element.name}</option>)}
                            </select>:
                            <></>
                    }
                   

            </div>
            <div className="input-element">
                <label>Serial Number</label>
                <input type='number' onKeyUp={(e) => setEnterence({ ...enterence, serialNumber: parseInt(e.target.value) })} placeholder="serial Number" required />
            </div>
            <div className="input-element">
                <label>Year</label>
                <input type='number' onKeyUp={(e) => setEnterence({ ...enterence, year: parseInt(e.target.value) })} placeholder="year" required />
            </div>          
            <div className="input-element">
                <label>upload full text </label>
                <input type="file" onChange={sendBook} ref={bookUpload} />
            </div>

            <div className="input-element">
                <label>date</label>
                <input type='date' onKeyUp={(e) => setEnterence({ ...enterence, date: e.target.value })} placeholder="date" />
            </div>
            <button className="science-submit" onClick={sendScience}>Submit</button>
        </div>


    </>)
}