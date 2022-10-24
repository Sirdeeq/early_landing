/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Col, FormGroup, Input, Label, Row, } from 'reactstrap'
import FullButton from '../Buttons/FullButton';
// import { HiMapPin } from 'react-icons/hi'
import { apiURL, _postApi } from './helpers/helper';
// import Map from './Component/Map'
// import NewMap from './Component/NewMap';

export default function LocationForm() {
    // const [form, setForm] = useState();
    // const [radios, setRadio] = useState({
    //     order: [],
    // })
    // const [state,setState] = useState(null)
    // const [coor, setCoor] = useState({
    //     lat: '',
    //     long: ''
    // })
    // let geoId;


    // useEffect(() => {
    //     //ComponenntDidMount
    //     console.log("Exact position located")
    //     geoId = window.navigator.geolocation.watchPosition(position => {
    //         setCoor({
    //             lat: position.coords.latitude,
    //             long: position.coords.longitude
    //         })
    //     })

    //     return () => {
    //         navigator.geolocation.clearWatch(geoId)
    //     }
    // }, []
    // )
    // const handleChange = ({ target: { name, value } }) => {
    //     setRadio((p) => ({ ...p, [name]: value }))
    //     setForm((p) => ({ ...p, entry_type: value }))
    // }
    // return (
    //     <div>

    //         <div className="container">
    //             <form>
    //                 <Row>
    //                     <Col md={4}>
    //                         <b> Entry Type :</b>
    //                     </Col>
    //                     <Col md={4} className="text-left" >
    //                         <FormGroup >
    //                             <Label >
    //                                 <Input type='radio' name='order' value={'coordinate'} selected onChange={handleChange} />
    //                                 &nbsp;  Coordinate
    //                             </Label>
    //                         </FormGroup>
    //                     </Col>
    //                     <Col md={4} className="text-left">
    //                         <FormGroup >
    //                             <Label >

    //                                 <Input type='radio' name='order' value={'gis'} onChange={handleChange} />
    //                                 &nbsp; Gis
    //                             </Label>
    //                         </FormGroup>
    //                     </Col>
    //                 </Row>

    //                 <Row>
    //                     <Col md={12}>
    //                         {radios.order === 'coordinate' ? <FormGroup>
    //                             <Label htmlFor="nameText">Location Name</Label>
    //                             <input type="text" className="inputs" id="nameText" placeholder="Enter your Location" autofocus />
    //                         </FormGroup> : <FormGroup>
    //                             <Label htmlFor="fulladdressText">Full address</Label>
    //                             <div className="input-group">
    //                                 <input type="text" className="inputs" id="fulladdressText" placeholder="Enter full address" />
    //                                 <span className="input-group-btn">
    //                                     {/* <Button id="geolocateButton" color={'secondary'} data-toggle="tooltip" data-placement="top" title="Use your current location" data-title-clear="Clear address field" data-title-geolocate="Use your current location" data-title-loading="Please wait, finding your loaction...">N</Button> */}
    //                                 </span>
    //                             </div>
    //                         </FormGroup>

    //                         }
    //                         {
    //                             radios.order === 'gis' ? <>{state?<>
    //                                 <FormGroup >
    //                                         <Label >Coordivates</Label>
    //                                         <input className='inputs' type="text" name="coordinates" disabled value={state} />
    //                                     </FormGroup>
    //                             </>:<Row>
    //                                 <Col md={6}>
    //                                     <FormGroup >
    //                                         <Label >Latitude</Label>
    //                                         <input className='inputs' type="number" onChange={handleChange} name="lat" disabled value={coor.lat} />
    //                                     </FormGroup>

    //                                     </Col>  
    //                                     <Col  md={6}>
    //                                     <FormGroup >
    //                                         <Label >Longitude</Label>
    //                                         <input className='inputs' type="number" onChange={handleChange} name="long" disabled value={coor.long} />
    //                                     </FormGroup>
    //                                 </Col>
    //                                 </Row>}</>
    //                                 :
    //                                 <Col>
    //                                     <FormGroup >
    //                                         <Label >Latitude</Label>
    //                                         <Input type="number" onChange={handleChange} name="lat" />
    //                                     </FormGroup>

    //                                     <FormGroup >
    //                                         <Label >Longitude</Label>
    //                                         <Input type="number" onChange={handleChange} name="long" />
    //                                     </FormGroup>
    //                                 </Col>

    //                         }

    //                     </Col>
    //                     <Col md={12} >
    //                         {radios.order === 'gis' ? <div id="map-container">

    //                             {/* <NewMap geom={coor} setState={setState}/> */}
    //                         </div> : ""}
    //                     </Col>
    //                 </Row>

    //             </form>

    //         </div>


    //         <div className="modal fade" id="addRegionModal" tabIndex="-1" role="dialog" aria-labelledby="addRegionModalLabel" aria-hidden="true">
    //             <div className="modal-dialog" role="document">
    //                 <div className="modal-content">
    //                     <div className="modal-header">
    //                         <h5 className="modal-title" id="addRegionModalLabel">New Region</h5>
    //                         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
    //                             <span aria-hidden="true">&times;</span>
    //                         </button>
    //                     </div>
    //                     <div className="modal-body">
    //                         <form>
    //                             <FormGroup>
    //                                 <label htmlFor="region_name" className="control-label">Name</label>
    //                                 <input type="text" className="form-control" id="region_name" name="region_name" placeholder="Region name" />
    //                             </FormGroup>
    //                             <FormGroup >
    //                                 <label htmlFor="regionDescriptionTextarea">Description</label>
    //                                 <textarea className="form-control" id="regionDescriptionTextarea" rows="4"></textarea>
    //                             </FormGroup>

    //                         </form>
    //                     </div>
    //                     <div className="modal-footer">
    //                         <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
    //                         <button type="button" className="btn btn-primary">Add region</button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
}



export function LocationMessage() {
    const [form, setForm] = useState({
        // loc_name: "",
        report_type: '',
        description: '',loc_lat: '',
        loc_long: ''
    })
  
    let geoId;
    const handleChange = ({ target: { name, value } }) => {
        setForm((p) => ({ ...p, [name]: value }))
        // setCoor((p) => ({ ...p, [name]: value }))

    }



    useEffect(() => {
        //ComponenntDidMount
        console.log("Exact position located")
        geoId = window.navigator.geolocation.watchPosition(position => {
            setForm(p => ({
                ...p,
                loc_lat: position.coords.latitude,
                loc_long: position.coords.longitude
            }))
            console.log(form);
        })

        return () => {
            navigator.geolocation.clearWatch(geoId)
        }
    }, []
    )
    // const handleMessage = () => {
    //     _postApi(
    //         `${apiURL}/api/message?query_type=new`,
    //         form.message,
    //         (data) => {
    //             if (data.success) {
    //                 //  alert("Message success")
    //             }
    //         },
    //     )
    // }
    // const handleLocation = () => {
    //     _postApi(
    //         `${apiURL}/api/location?query_type=new`,
    //         coor,
    //         (data) => {
    //             if (data.success) {
    //                 alert("location success")
    //             }
    //         },
    //     )
    // }
    
    const handleSubmit = () => {
        // console.log(coor);
        console.log(form);
        _postApi(
            `${apiURL}/general?query_type=insert`,
            form,
            (data) => {
                if (data.success) {
                    alert("success")

                }
            },
        )
    }

    return (
        <div>
            {/* <Card body > */}
            <Row>
                {/* {JSON.stringify(form)} */}
                <Col md={12} >
                    <FormGroup>
                        {/* <Label htmlFor="nameText">Location Name</Label> */}
                        <Input type="text" className="form-control" id="nameText" name='lat' hidden onChange={handleChange} value={form.loc_lat} />
                        <Input type="text" className="form-control" id="nameText" hidden name='long ' onChange={handleChange} value={form.loc_long} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="reprot_type">Disaster Type</Label>
                        <Input type="select" className="form-control" id="report_type" name='report_type' value={form.report_type} onChange={handleChange}>
                            <option value=''>Select Disaster Type</option>
                            <option value='flooding'>Flooding</option>
                            <option value='fire_outbreak'>Fire Outbreak</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="Message">Message</Label>
                        <Input type="textarea" className="form-control" id="Message" placeholder="Enter your message" name='description' value={form.description} onChange={handleChange} />
                    </FormGroup>
                    <center><FullButton title="Report Disaster" action={() => handleSubmit()} /></center>
                </Col>
            </Row>
            {/* </Card> */}
        </div>
    )
}
