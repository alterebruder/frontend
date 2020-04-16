import React, {Component} from "react";

import {Button, Form, Grid, Divider, Segment} from 'semantic-ui-react'
import {InputFile} from 'semantic-ui-react-input-file'
import axios from "axios"
export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedVideo: null,
            selectedFace: null
        }
    }

    handleVideoUpload=e=> {
        const axios_api = axios.create({
            baseURL: 'http://localhost:3034/'
        })
        axios_api.post("/files/video.mp4", e.target.files[0], {

        }).then(response => {
            console.log(response.statusText)
        })
    }

    handleFaceUpload=e=> {
        const axios_api = axios.create({
            baseURL: 'http://localhost:3034/'
        })
        axios_api.post("/files/face.jpg", e.target.files[0], {

        }).then(response => {
            console.log(response.statusText)
        })
    }

    handleFormSubmit=e=>{
        const axios_api = axios.create({
            baseURL: 'http://localhost:3034/'
        })
        axios_api.get("/apply", {

        }).then(response => {
            console.log(response.statusText)
            if(response.status == 201) {
                axios_api.get("/files/output.avi", {

                })
            }
        })
    }

    render() {
        return (
            <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 450}}>
                    <Form size='large'>
                        <Segment stacked>
                            <InputFile
                                button={{content: 'Upload video'}}
                                input={{
                                    id: 'video-control',
                                    onChange: this.handleVideoUpload
                                }}
                            />
                            <Divider horizontal>AND</Divider>
                            <InputFile
                                button={{content: 'Upload face'}}
                                input={{
                                    id: 'face-control',
                                    onChange: this.handleFaceUpload
                                }}
                            />
                            <Divider horizontal>THEN</Divider>
                            <Button color='teal' fluid size='large' onClick={this.handleFormSubmit}>
                                Submit
                            </Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }
}