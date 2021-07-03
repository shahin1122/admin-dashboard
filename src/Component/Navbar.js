import React , {useState} from 'react';
import {Link} from 'react-router-dom'

// import all icons from react icons

import { FaBars } from 'react-icons/fa';
import { AiOutlineClose , AiOutlineSearch , AiOutlineBell , AiFillSetting , AiFillQuestionCircle , AiOutlineDownload , AiOutlineShareAlt} from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons/lib';
import {DiAngularSimple} from 'react-icons/di'
import {FiMail} from 'react-icons/fi'
import {CgProfile} from 'react-icons/cg'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {MdAddCircle} from 'react-icons/md'
import {AiOutlineArrowUp} from 'react-icons/ai'
import {AiOutlineArrowDown} from 'react-icons/ai'
import { Chart } from "react-google-charts";
 
// importing css file 
import './Navbar.css'




const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));



const Navbar = () => {

    const classes = useStyles();

    const [sidebar , setSidebar] = useState(false);


    const showSidebar = ()=> setSidebar(!sidebar);
    
    return (
        <>
        <div className="row navbar ">
          <div className="col-md-4 navbar overflow-hidden">
               <Link to="#" className="menu-bars">
                    <FaBars onClick={showSidebar}/>
                </Link>
               <div className="adminIcon">
                    < DiAngularSimple style={{fontSize:'4.3rem' , color:'#4863A0' , paddingLeft:'1.5rem'}} /><h2> Admin</h2>
               </div>
               <span className="searchBar">
                <AiOutlineSearch style={{fontSize:'1rem'}}/><input type="text" placeholder="Search.." />
               </span>
            </div>

            <div className="col-md-4">

            </div>

            <div className="col-md-4">
                <span className="rightIcons">
                    <FiMail className="rightIcon"/> <AiOutlineBell className="rightIcon"/> <AiFillSetting className="rightIcon"/> <AiFillQuestionCircle className="rightIcon"/> <CgProfile className="rightIcon"/>
                </span>
            </div>

          </div>




           <div className="row">

               {/* sidebar columns */}


               <div className="col-md-2">
               <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul onClick={showSidebar} className='nav-menu-items'>
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-bars'>
                            <AiOutlineClose/>
                        </Link>
                    </li>
                    <h5>Main Menu</h5>
                    {
                        
                        SidebarData.map((item, index)=>{
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>

            </nav>
               </div>
               <div className="col-md-2 mt-3 d-flex justify-content-center">
                   <h5>Ecommerce Dashboard</h5>

               </div>
               <div className="col-md-2">

               </div>
               


               <div className="col-md-6  mt-3 row  ">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                <form className={classes.container} noValidate>
                <TextField
                    id="date"
                    label=""
                    type="date"
                    defaultValue="2021-05-24"
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                <h6>To</h6>
                <TextField
                    id="date"
                    label=""
                    type="date"
                    defaultValue="2021-05-26"
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                </form>
                    </div>

                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <button className=" btn btn-light mx-2 my-2"> <AiOutlineDownload/> Export</button>
                            <button className=" btn btn-light mx-2 my-2"> <AiOutlineShareAlt/> Share</button>
                            <button className=" btn btn-light mx-2 my-2 add-btn" > <MdAddCircle/> Add new</button>
                    </div>
                </div>
               

           </div>


           {/* Barchart and Graph part 1 */}

           <div className="row my-3">
               <div className="col-md-2">
                   
               </div>

               <div className="col-md-3 row chart1">
                   <div className="column1 m-2">
                       <h2>7461</h2>
                       <p>Order</p>
                       <br /><br />
                       <b><span className="text-success"><AiOutlineArrowUp/> 25% </span></b> <small>Since last week</small>

                </div>

                <div className="column2">

                    {/* chart  */}

                    <Chart
                        width={'100%'}
                        height={'100%'}
                        chartType="Bar"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Chart', 'Lorem', 'Ipsum'],
                            ['Bar Chart', 1000, 400],
                            
                        ]}
                    />                  
                                        

            </div>
        </div>


        <div className="col-md-3 row chart1">
                <div className="column1 m-2">
                       <h2>$28,947</h2>
                       <p>Revenue</p>
                       <br /><br />
                       <b><span className="text-success"><AiOutlineArrowUp/> 8.2% </span></b> <small>Since last week</small>
                </div>
                <div className="column2">
                   <Chart
                        width={'100%'}
                        height={'100%'}
                        chartType="Bar"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Chart', 'Lorem', 'Ipsum'],
                            ['Bar Chart', 1000, 400],
                            
                        ]}
                    />    
                </div>
        </div>
        <div className="col-md-3 row chart1">
            <div className="column1">
                <h2>$3,241</h2>
                <p>Avg. Oeder value</p>
                <br /><br />
                <b><span className="text-danger"><AiOutlineArrowDown/> 25% </span></b> <small>Since last week</small>
            </div>
        <div className="column2">
                <Chart
                       className="chartClass"
                        width={'100%'}
                        height={'90%'}
                        chartType="Bar"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Year', 'Sales', 'Expenses', 'Profit'],
                            ['2014', 1000, 400, 200],
                            ['2015', 1170, 460, 250],
                            ['2016', 660, 1120, 300],
                            ['2017', 1030, 540, 350],
                        ]}
                        options={{
                            // Material design options
                            chart: {
                            title: 'Company Performance',
                            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                            },
                        }}
                        // For tests
                        rootProps={{ 'data-testid': '2' }}
                        />
                    </div>
               </div>
        </div>

        <div className="row">
               <div className="col-md-2">

               </div>

               <div className="col-md-3">
                   
               </div>

               <div className="col-md-3 singleChart">
                    <div className="column1">
                       <h2>$3,241</h2>
                       <p>Avg. Oeder value</p>
                       <br /><br />
                       <b><span className="text-danger"><AiOutlineArrowDown/> 25% </span></b> <small>Since last week</small>


                   </div>
                   <div className="column2">
                   <Chart
                    width={'100%'}
                    height={'100%'}
                    chartType="BarChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        [
                        'Element',
                        'Density',
                        { role: 'style' },
                        {
                            sourceColumn: 0,
                            role: 'annotation',
                            type: 'string',
                            calc: 'stringify',
                        },
                        ],
                        ['Copper', 8.94, '#b87333', null],
                        ['Silver', 10.49, 'silver', null],
                        ['Gold', 19.3, 'gold', null],
                        ['Platinum', 21.45, 'color: #e5e4e2', null],
                    ]}
                    options={{
                        title: 'Demo of verious graph!',
                        width: 180,
                        height: 180,
                        bar: { groupWidth: '95%' },
                        legend: { position: 'none' },
                    }}
                    // For tests
                    rootProps={{ 'data-testid': '6' }}
                    />  
                </div>
            </div>

               <div className="col-md-3">
                   
               </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-2">
                   

        </div>
               <div className="col-md-6 lineChartParent">
                <h6 className="text-secondary pt-5">Total Revinew</h6>
               <Chart
                    className="pt-5"
                    width={'100%'}
                    height={'500px'}
                    title="Total revinue"
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['x', 'Current Period', 'Previous Period'],
                        ['January', 0, 0],
                        ['February', 10, 5],
                        ['March', 23, 15],
                        ['April', 17, 9],
                        ['May', 18, 10],
                        ['June', 9, 5],
                        ['July', 11, 3],
                        ['August', 27, 19],
                        ['September', 18, 10],
                        ['October', 9, 5],
                        ['November', 11, 3],
                        ['December', 27, 19],
                    ]}
                    options={{
                       
                        series: {
                        1: { curveType: 'function' },
                        },
                    }}
                    rootProps={{ 'data-testid': '2' }}
                    />

               </div>
               <div className="col-md-4 mapColumn ">
                   
                   <div style={{backgroundColor:'#FFFFFF'}} className="p-5 parentMap">
                   <h6>Sales by location</h6>
                   <Chart
                        width={'100%'}
                        height={'100%'}
                        chartType="GeoChart"
                        data={[
                            ['Country', 'Sales'],
                           
                            ['United States', 397],
                            ['United Kingdom', 378],
                            ['Canada', 220],
                            ['China', 140],
                           
                        ]}
                        
                        mapsApiKey="YOUR_KEY_HERE"
                        rootProps={{ 'data-testid': '1' }}
                        />
                        <table class="table">
                        <thead>
                            <tr>
                            
                            <th className="text-secondary" scope="col">Top location</th>
                            <th className="text-secondary" scope="col">Order</th>
                            <th className="text-secondary" scope="col">Revinew</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            
                            <td>United States</td>
                            <td>397</td>
                            <td>$23,997</td>
                            </tr>
                            <tr>
                            
                            <td>United Kingdom</td>
                            <td>378</td>
                            <td>$21,578</td>
                            </tr>
                            <tr>
                           
                            <td>Canada</td>
                            <td>220</td>
                            <td>$18,398</td>
                            </tr>

                            <tr>
                            <td>China</td>
                            <td>140</td>
                            <td>$13,391</td>
                            </tr>
                        </tbody>
                        </table>
                   </div>

               </div>

           </div>
        <div className="row mb-0">
               <div className="col-md-2">

               </div>
               <div className="col-md-5 py-4 parentTableClass">
                  <div className="p-3 tableClass">
                  <h6 className="text-secondary">Top selling products</h6>
                    <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Products Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Sold</th>
                        <th scope="col">Revinue</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Samsung Galaxy S8</td>
                        <td>$280</td>
                        <td>126</td>
                        <td>$38,536</td>
                        </tr>
                        <tr>
                        <td>Half Sleeve Shirt</td>
                        <td>$25</td>
                        <td>80</td>
                        <td>$20,573</td>
                        </tr>
                        <tr>
                        <td>Macro Shows</td>
                        <td>$32</td>
                        <td>58</td>
                        <td>$17,457</td>
                        </tr>
                        <tr>
                        <td>15" Mackbook Pro</td>
                        <td>$950</td>
                        <td>36</td>
                        <td>$15,354</td>
                        </tr>
                        <tr>
                        <td>Apple iPhone X</td>
                        <td>$985</td>
                        <td>36</td>
                        <td>$10,710</td>
                        </tr>
                    </tbody>
                    </table>

                  </div>

               </div>
               
               <div className="col-md-5 parentPie my-4">
                        <div className="">
                        <Chart
                        className="pieChartClass"
                        width={'100%'}
                        height={'100%'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Task', 'Hours per Day'],
                            ['Desktop', 45],
                            ['Mobile', 30],
                            ['Tablet', 25],
                            
                        ]}
                        options={{
                            title: 'Revinue By Device',
                            // Just add this option
                            pieHole: 0.4,
                        }}
                        rootProps={{ 'data-testid': '3' }}
                        />
                        <table class="table table-borderless">
                        
                        <tbody>
                            <tr>
                            <th scope="row">Desktop</th>
                            <td>$5870</td>
                            <td>45%</td>
                            
                            </tr>
                            <tr>
                            <th scope="row">Mobile</th>
                            <td>$4,483</td>
                            <td>30%</td>
                            
                            </tr>
                            <tr>
                            <th scope="row">Tablets</th>
                            <td>$2,420</td>
                            <td>25%</td>
                            </tr>
                        </tbody>
                        </table>

                        </div>

               </div>
           </div>
           <div className="row bg-light footerClass">
               <div className="col-md-2">

               </div>
               <div className="col-md-2">
                   <b><small className="text-secondary  px-2">2020 &copy Aazz Tech</small></b> 
              </div>
               <div className="col-md-6">

               </div>
               <div className="col-md-2">
                   <span className="px-2 text-secondary">About</span><span className="px-2 text-secondary">Team</span><span className="px-2 text-secondary">Contact</span>

               </div>
           </div>
    </>
    );
};

export default Navbar;