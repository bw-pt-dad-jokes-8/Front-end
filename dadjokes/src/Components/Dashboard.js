import React from 'react';
import axios from 'axios';
import { Box, Heading } from "grommet";



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
        return (
            <Box direction='row' flex overflow="auto" className="main" pad="0" >
                <Box className="dashboard" flex align='center' pad="0">
                    <Heading level={2}>
                        Authorized
                    </Heading>
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
