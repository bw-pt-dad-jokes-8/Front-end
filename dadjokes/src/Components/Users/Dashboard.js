import React from 'react';
import axios from 'axios';
import {Box, Heading, Button} from "grommet";
import {AddCircle, Previous} from "grommet-icons";
import {useHistory} from "react-router-dom";

export const axiosWithAuth =() => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        }
    });
};

export default function(){
    if(localStorage.getItem('token')){
      let history = useHistory();
        return (
          <Box tag="section" className="entry" pad="medium" >
            <Box tag="div" direction='row' pad="0" >
              <Box direction="row" align="start" pad={{ top: 'small' }}>
                <Button	icon={<Previous color='brand'/>} onClick={() => history.goBack()} />
              </Box>
              <Box justify='start' margin="small" >
                <Heading level="2" margin="small">
                  Authorized
                </Heading>
                <Box>
                  <Button
                    label="Add Joke"
                    icon={<AddCircle color='brand'/>}
                    fill="horizontal"
                    color="secondary"
                    onClick={() => history.push("/add")}
                    />
                </Box>
              </Box>
            </Box>
          </Box>
        )
    }
    return (
      <Box direction='row' flex overflow="auto" className="main" pad="0" >
          <Box className="dashboard" flex align='center' pad="0">
              <Heading level={2}>
                  Not Authorized
              </Heading>
          </Box>
      </Box>
    )
}