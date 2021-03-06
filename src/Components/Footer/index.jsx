import { Container, Grid, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Instagram, Phone, Telegram } from "@mui/icons-material";
import { Link } from "react-router-dom";

 function Footer (){
    return<>
        <footer className="main-footer">
            <Container>
                <Grid container  spacing={3} >
                    <Grid item xs={12} sm={4}>
                        
                        <List>
                            <ListItem>
                                Social links
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Instagram/>
                                </ListItemIcon>
                                <ListItemText>
                                    <Link to="https://www.instagram.com/">Instagram</Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Telegram/>
                                </ListItemIcon>
                                <ListItemText>
                                    <Link to="https://www.instagram.com/">Telegram</Link>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        
                        <List>
                            <ListItem>
                                Address:
                            </ListItem>
                            <ListItem>
                                <address>
                                    45 O'zbekiston shoh ko'chasi, Тошкент
                                </address>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Phone/>
                                </ListItemIcon>
                                <ListItemText>
                                    +998 71 232 61 05
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11987.672743834837!2d69.2548674!3d41.3106434!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc78956a4447b32d1!2sDavlat%20Boshqaruv%20Akademiyasi!5e0!3m2!1sru!2s!4v1631688934071!5m2!1sru!2s" width="300" height="250" style={{border:0 }} title="picture" loading="lazy"></iframe>
                       
                    </Grid>
                </Grid>
            </Container>
        </footer>
    </>
}
export default Footer