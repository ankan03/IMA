// import React, { useEffect, useState } from 'react';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import Checkbox from "@material-ui/core/Checkbox";
// import Button from '@material-ui/core/Button';
// import Input from '@material-ui/core/Input';
// import SearchIcon from '@material-ui/icons/Search';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import InfiniteScroll from "react-infinite-scroll-component";
// import { CircularProgress } from "@material-ui/core";
// import AddIcon from '@material-ui/icons/Add';
// import MyPopUp from './MyPopUp';
// import RemoveIcon from '@material-ui/icons/Remove';
// import EditIcon from '@material-ui/icons/Edit';
// import EditPopUp from './EditPopUp';
// import DeletePopUp from './DeletePopUp';
// import ViewCorrospondancePopUp from './ViewCorrospondancePopUp';
// import axios from 'axios'

// const themeCheckBox = createMuiTheme({
//     overrides: {
//         MuiTableCell: {
//             root: {
//                 borderBottom: "none"
//             },
//         },
//     },
// });

// const StyledTableCell = withStyles((theme) => ({
//     root: {
//         borderBottom: "none"
//     },
//     head: {
//         backgroundColor: "#2E4350",
//         color: theme.palette.common.white,
//         borderBottom: '2px solid #283A46',
//         fontSize: '0.9vw',
//         color: '#97A1A9',
//         paddingTop: '0px',
//         paddingBottom: '0px',
//     },
//     body: {
//         fontSize: '1.1vw',
//         color: 'white',
//         paddingTop: '0px',
//         paddingBottom: '0px',
//     },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//     root: {
//         '&:nth-of-type(even)': {
//             backgroundColor: '#283A46',
//         },
//         '&:nth-of-type(odd)': {
//             backgroundColor: '#2F4451',
//             borderTop: '2px solid #2F4451',
//             borderBottom: '2px solid #2F4451',
//         },
//         '&:hover': {
//             backgroundColor: '#2A5368'
//         }
//     },
// }))(TableRow);

// const StyledButtonSolid = withStyles({
//     root: {
//         background: 'linear-gradient(45deg, #14AFF1 30%, #14AFF1 90%)',
//         borderRadius: 7,
//         border: 0,
//         color: 'white',
//         height: '2.3vw',
//         padding: '0vw 1.2vw',
//         margin: '0.3vw 0.3vw',
//         fontSize: '1vw',
//     },
//     label: {
//         textTransform: 'capitalize',
//     },
// })(Button);

// const StyledButtonHollow = withStyles({
//     root: {
//         border: '1px solid #14AFF1',
//         borderRadius: 7,
//         color: 'white',
//         height: '2.3vw',
//         padding: '0vw 0.9vw',
//         margin: '0.3vw 0.6vw',
//         fontSize: '1vw',
//     },
//     label: {
//         textTransform: 'capitalize',
//     },
// })(Button);

// const StyledButtonHollowAdd = withStyles({
//     root: {
//         border: '1px solid #14AFF1',
//         borderRadius: 7,
//         color: 'white',
//         height: '2.3vw',
//         padding: '0vw 0.9vw',
//         margin: '0.3vw 0.6vw',
//         fontSize: '1vw',
//     },
//     label: {
//         textTransform: 'capitalize',
//     },
// })(Button);

// const StyledButtonHollowEdit = withStyles({
//     root: {
//         border: '1px solid #14AFF1',
//         borderRadius: 7,
//         color: 'white',
//         height: '2.3vw',
//         padding: '0vw 0.9vw',
//         margin: '0.3vw 0.6vw',
//         fontSize: '1vw',
//     },
//     label: {
//         textTransform: 'capitalize',
//     },
// })(Button);

// const StyledButtonHollowDelete = withStyles({
//     root: {
//         border: '1px solid #14AFF1',
//         borderRadius: 7,
//         color: 'white',
//         height: '2.3vw',
//         padding: '0vw 0.9vw',
//         margin: '0.3vw 0.6vw',
//         fontSize: '1vw',
//     },
//     label: {
//         textTransform: 'capitalize',
//     },
// })(Button);



// const StyledCheckbox = withStyles({
//     root: {
//         '&$checked': {
//             color: '#14AFF1',
//         },
//         color: '#97A1A9',
//         height: '1vw',
//         borderBottom: "none",
//     },
//     checked: {},
// })(Checkbox);

// const StyledInput = withStyles({
//     root: {
//         // borderBottom: '0px solid black',
//         border: '1px solid #14AFF1',
//         borderRadius: 10,
//         color: 'white',
//         height: '2.5vw',
//         padding: '0vw 2vw',
//         margin: '0.3vw 1vw'
//     },
//     label: {
//         textTransform: 'capitalize',
//     },
// })(Input);


// // function createData(name, cid, iid, iamount, dd, ppd, pab, notes) {
// //     return { name, cid, iid, iamount, dd, ppd, pab, notes };
// // }



// const useStyles = makeStyles({
//     table: {
//         minWidth: 700,
//     },
//     button: {
//         '& > *': {
//             background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//             color: 'white',
//         },
//     },
//     underline: {
//         "&&&:before": {
//             borderBottom: "none"
//         },
//         "&&:after": {
//             borderBottom: "none"
//         }
//     },
//     '@global': {
//         '*::-webkit-scrollbar': {
//             width: '0.4em'
//         },
//         '*::-webkit-scrollbar-track': {
//             '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
//             backgroundColor: '#2E4350',
//         },
//         '*::-webkit-scrollbar-thumb': {
//             backgroundColor: '#61707B',
//             outline: '1px solid slategrey',
//         }
//     },
// });

// // handleSelectAllClick = (event) => {
// //     if (event.target.checked) {
// //         setChecked(checked => [...oldArray, newElement]);
// //       this.setState((state) => ({ selected: state.data.map((n) => n.id) }));
// //       return;
// //     }
// //     this.setState({ selected: [] });
// //   };

// //   handleCheckboxClick = (event, id) => {
// //     event.stopPropagation();
// //     console.log("checkbox select");
// //     const { selected } = this.state;
// //     const selectedIndex = selected.indexOf(id);
// //     let newSelected = [];

// //     if (selectedIndex === -1) {
// //       newSelected = newSelected.concat(selected, id);
// //     } else if (selectedIndex === 0) {
// //       newSelected = newSelected.concat(selected.slice(1));
// //     } else if (selectedIndex === selected.length - 1) {
// //       newSelected = newSelected.concat(selected.slice(0, -1));
// //     } else if (selectedIndex > 0) {
// //       newSelected = newSelected.concat(
// //         selected.slice(0, selectedIndex),
// //         selected.slice(selectedIndex + 1)
// //       );
// //     }

// //     this.setState({ selected: newSelected });
// //   };


// let debounceTimer = null;
// export default function CustomizedTables() {
//     // const { useState } = React;
//     const [checked, setChecked] = useState([]);
//     const [data, setData] = useState([]);
//     const [hasMore, setHasMore] = useState(false);

//     const [page, setPage] = useState(1);
//     const [searchPage, setSearchPage] = useState(1);

//     const [openPopup, setOpenPopup] = useState(false)
//     const [openPopupEdit, setOpenPopupEdit] = useState(false)
//     const [openPopupDelete, setOpenPopupDelete] = useState(false)
//     const [openPopupViewCorrospondance, setOpenPopupViewCorrospondance] = useState(false)
//     const classes = useStyles();

//     const [recordForEdit, setRecordForEdit] = useState(null)
//     const [checkList, setCheckList] = useState([])
//     const [finalCheckItemList, setFinalCheckItemList] = useState([])
//     const [docId, setDocId] = useState(0)

//     const [searchValue, setSearchValue] = React.useState("");
//     const [searchResults, setResults] = React.useState([]);
//     const [tableData, setTableData] = React.useState([]);


//     useEffect(() => {
//         const getData = async () => {
//             console.log("IN GET DATA");
//             await fetch(`http://localhost:8080/1828049/RetriveInvoiceDataPageServlet?page=${page}`)
//                 .then((res) => res.json())
//                 .then((data) => {
//                     setData((prev) => [...prev, ...data]);
//                     setHasMore(true);
//                 })
//                 .catch((err) => console.log(err));
//         };
//         getData();
//     }, [page]);



//     useEffect(() => {
//         const getData = async () => {
//             console.log("IN GET DATA");
//             await getSearchResults();
//         };
//         getData();
//     }, [searchPage]);



//     useEffect(() => {
//         if (searchResults.length > 0) {
//             setTableData(data)
//             setData(searchResults)
//         } else {
//             setData(tableData)
//         }
//     }, [searchResults])


//     // const fetchInvoiceList = () => {
//     //     setPage(page + 1);
//     // }

//     // const fetchSearchList = () => {
//     //     setSearchPage(searchPage + 1)
//     // }

//     const fetchMoreData = () => {
//         if (searchValue === "") {
//             setPage(page + 1);
//             console.log("FUNCTION  fetchInvoiceList")
//         } else {
//             setSearchPage(searchPage + 1)
//             console.log("FUNCTION fetchSearchList")
//         }
//     };


































//     const handleCheckboxClick = (docId) => {
//         console.log(`docId=${docId}`)
//         if (checkList.indexOf(docId) === -1) {
//             console.log('IF')
//             setCheckList((prev) => [...prev, docId]);
//         } else {
//             console.log('ELSE')
//             let myList = []
//             for (let i = 0; i < checkList.length; i++) {
//                 if (checkList[i] !== docId) {
//                     myList.push(checkList[i])
//                 }
//             }
//             setCheckList(myList)
//         }

//         console.log(`checkList = ${checkList}`)
//     }

//     function makeFinalCheckedItemList() {
//         let tempList = []
//         for (let i = 0; i < checkList.length; i++) {
//             for (let j = 0; j < data.length; j++) {
//                 if (checkList[i] == data[j].docId) {
//                     tempList.push(data[j])
//                 }

//             }
//         }
//         setFinalCheckItemList(tempList)
//         console.log(`finalCheckItemList=${finalCheckItemList.map(e => e.nameCustomer)}`)
//     }

//     function retriveEditItem() {
//         if (checkList.length === 0) {
//             alert(`Select one item`)
//         } else if (checkList.length > 1) {
//             alert(`Select only one item`)
//         } else if (checkList.length === 1) {
//             setDocId(checkList[0])
//             // makeFinalCheckedItemList()
//             setOpenPopupEdit(true)
//             setOpenPopup(false)
//             setOpenPopupDelete(false)
//         }



//     }

//     function retriveDeleteItem() {
//         if (checkList.length === 0) {
//             alert(`Select one item`)
//         } else if (checkList.length > 1) {
//             alert(`Select only one item`)
//         } else if (checkList.length === 1) {
//             setDocId(checkList[0])
//             // makeFinalCheckedItemList()
//             setOpenPopupDelete(true)
//             setOpenPopupEdit(false)
//             setOpenPopup(false)

//         }



//     }

//     function retriveViewCorrospondanceItem() {
//         makeFinalCheckedItemList()
//         setOpenPopupViewCorrospondance(true)
//         setOpenPopupDelete(false)
//         setOpenPopupEdit(false)
//         setOpenPopup(false)
//     }

//     const getSearchResults = () => {
//         axios
//             .get(`http://localhost:8080/1828049/SearchInvoiceDataPageServlet?page=${searchPage}&invoice_id=${searchValue}`)
//             .then((response) => {
//                 console.log("Search Response Data", response.data);
//                 setResults(response.data);
//                 // setData(response.data);
//             })
//             .then((error) => {
//                 console.log("Error", error);
//             });
//     };

//     const handleSearchValueChange = (event) => {
//         const newSearchVal = event.target.value;
//         setSearchValue(newSearchVal);

//         // if (newSearchVal.trim().length >= 3) {
//         clearTimeout(debounceTimer);
//         debounceTimer = setTimeout(() => {
//             setSearchPage(1);
//             getSearchResults();

//         }, 500);
//         // }
//         // if (newSearchVal === "") setResults([]);
//         // if (newSearchVal === "") setData([]);
//     };

//     return (
//         <div>
//             <div style={{ fontSize: '1.47vw', color: 'white', paddingBottom: '1.6vw' }}>Invoice List</div>


//             <div style={{ padding: '1.2vw 1.6vw', backgroundColor: '#2E4350', borderRadius: '5px' }}>



//                 <div style={{ paddingBottom: '1vw' }}>
//                     <span style={{}}>
//                         <StyledButtonSolid style={{ marginLeft: '0px' }}>Predict</StyledButtonSolid>
//                         <StyledButtonHollow onClick={() => retriveViewCorrospondanceItem()}>View Correspondence</StyledButtonHollow>
//                     </span>
//                     <span style={{ float: 'right' }}>
//                         {/* <AddButton /> */}
//                         <StyledButtonHollowAdd startIcon={<AddIcon />} onClick={() => setOpenPopup(true)}>Add</StyledButtonHollowAdd>
//                         {/* <StyledButtonHollowEdit startIcon={<EditIcon />} onClick={() => setOpenPopupEdit(true)}>Edit</StyledButtonHollowEdit> */}
//                         <StyledButtonHollowEdit startIcon={<EditIcon />} onClick={() => retriveEditItem()}>Edit</StyledButtonHollowEdit>

//                         <StyledButtonHollowDelete startIcon={<RemoveIcon />} onClick={() => retriveDeleteItem()}>Delete</StyledButtonHollowDelete>
//                         <input style={{ border: '1px solid #14AFF1', borderRadius: '0.7vw', width: '16vw', height: '2.1vw', margin: '0.3vw 0.5vw', padding: '0px 0.5vw', color: 'white', backgroundColor: '#283A46', background: { SearchIcon } }} placeholder="Search By Invoice Number" className="customInput" onChange={handleSearchValueChange} />
//                     </span>
//                     <MyPopUp openPopup={openPopup} setOpenPopup={setOpenPopup}>

//                     </MyPopUp>
//                     <EditPopUp docId={docId} openPopupEdit={openPopupEdit} setOpenPopupEdit={setOpenPopupEdit}>

//                     </EditPopUp>
//                     <DeletePopUp docId={docId} openPopupDelete={openPopupDelete} setOpenPopupDelete={setOpenPopupDelete}>

//                     </DeletePopUp>
//                     <ViewCorrospondancePopUp finalCheckItemList={finalCheckItemList} openPopupViewCorrospondance={openPopupViewCorrospondance} setOpenPopupViewCorrospondance={setOpenPopupViewCorrospondance}>

//                     </ViewCorrospondancePopUp>
//                 </div>



//                 <InfiniteScroll
//                     dataLength={data.length}
//                     scrollableTarget="scrollableDiv"
//                     next={fetchMoreData}
//                     hasMore={hasMore}
//                     loader={
//                         <div
//                             style={{
//                                 textAlign: "center",
//                                 marginTop: "10px",
//                                 marginBottom: "10px",
//                             }}
//                         >
//                             <CircularProgress color="secondary" style={{ fontSize: "10px" }} />
//                         </div>
//                     }
//                 >

//                     <TableContainer style={{ maxHeight: '80vh' }} component={Paper}>
//                         <Table stickyHeader className={classes.table} aria-label="customized table">
//                             <TableHead>
//                                 <TableRow>
//                                     <ThemeProvider theme={themeCheckBox}>
//                                         <StyledTableCell padding="checkbox" >

//                                             <StyledCheckbox
//                                             // onChange={handleSelectAllClick} 
//                                             />
//                                         </StyledTableCell>
//                                     </ThemeProvider>
//                                     <StyledTableCell>Customer Name</StyledTableCell>
//                                     <StyledTableCell>Customer #</StyledTableCell>
//                                     <StyledTableCell>Invioce #</StyledTableCell>
//                                     <StyledTableCell>Invioce Amount</StyledTableCell>
//                                     <StyledTableCell align="right">Due Date</StyledTableCell>
//                                     <StyledTableCell align="right">Predicted Payment Date</StyledTableCell>
//                                     <StyledTableCell>Predicted Aging Bucket</StyledTableCell>
//                                     <StyledTableCell>Notes</StyledTableCell>
//                                 </TableRow>
//                             </TableHead>

//                             <TableBody>

//                                 {data.map((d) => (
//                                     <StyledTableRow key={d.docId}>
//                                         <ThemeProvider theme={themeCheckBox}>
//                                             <TableCell className="selectCheckbox" padding="checkbox">

//                                                 <StyledCheckbox onClick={(e) => handleCheckboxClick(d.docId)}
//                                                 // onClick={(event) =>
//                                                 // handleCheckboxClick(event, row.id)
//                                                 // }
//                                                 // className="selectCheckbox"
//                                                 // checked={isSelected}
//                                                 />


//                                             </TableCell>
//                                         </ThemeProvider>
//                                         <StyledTableCell component="th" scope="row">
//                                             {d.nameCustomer}
//                                         </StyledTableCell>
//                                         <StyledTableCell>{d.custNumber}</StyledTableCell>
//                                         <StyledTableCell>{d.invoiceId}</StyledTableCell>
//                                         <StyledTableCell>{d.totalOpenAmount}</StyledTableCell>
//                                         <StyledTableCell align="right">{d.dueInDate}</StyledTableCell>
//                                         <StyledTableCell align="right">{"--"}</StyledTableCell>
//                                         <StyledTableCell>{"--"}</StyledTableCell>
//                                         <StyledTableCell>{d.notes}</StyledTableCell>
//                                     </StyledTableRow>
//                                 ))}

//                             </TableBody>


//                         </Table>

//                     </TableContainer>
//                 </InfiniteScroll>
//             </div>

//         </div>

//     );
// }


































































import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from "@material-ui/core/Checkbox";
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import InfiniteScroll from "react-infinite-scroll-component";
import { CircularProgress } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import MyPopUp from './MyPopUp';
import RemoveIcon from '@material-ui/icons/Remove';
import EditIcon from '@material-ui/icons/Edit';
import EditPopUp from './EditPopUp';
import DeletePopUp from './DeletePopUp';
import ViewCorrospondancePopUp from './ViewCorrospondancePopUp';
import axios from 'axios'
import ViewCorrespondenceModal from './VC';

const themeCheckBox = createMuiTheme({
    overrides: {
        MuiTableCell: {
            root: {
                borderBottom: "none"
            },
        },
    },
});

const StyledTableCell = withStyles((theme) => ({
    root: {
        borderBottom: "none"
    },
    head: {
        backgroundColor: "#2E4350",
        color: theme.palette.common.white,
        borderBottom: '2px solid #283A46',
        fontSize: '0.9vw',
        color: '#97A1A9',
        paddingTop: '0px',
        paddingBottom: '0px',
    },
    body: {
        fontSize: '1.1vw',
        color: 'white',
        paddingTop: '0px',
        paddingBottom: '0px',
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(even)': {
            backgroundColor: '#283A46',
        },
        '&:nth-of-type(odd)': {
            backgroundColor: '#2F4451',
            borderTop: '2px solid #2F4451',
            borderBottom: '2px solid #2F4451',
        },
        '&:hover': {
            backgroundColor: '#2A5368'
        }
    },
}))(TableRow);

const StyledButtonSolid = withStyles({
    root: {
        background: 'linear-gradient(45deg, #14AFF1 30%, #14AFF1 90%)',
        borderRadius: 7,
        border: 0,
        color: 'white',
        height: '2.3vw',
        padding: '0vw 1.2vw',
        margin: '0.3vw 0.3vw',
        fontSize: '1vw',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

const StyledButtonHollow = withStyles({
    root: {
        border: '1px solid #14AFF1',
        borderRadius: 7,
        color: 'white',
        height: '2.3vw',
        padding: '0vw 0.9vw',
        margin: '0.3vw 0.6vw',
        fontSize: '1vw',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

const StyledButtonHollowAdd = withStyles({
    root: {
        border: '1px solid #14AFF1',
        borderRadius: 7,
        color: 'white',
        height: '2.3vw',
        padding: '0vw 0.9vw',
        margin: '0.3vw 0.6vw',
        fontSize: '1vw',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

const StyledButtonHollowEdit = withStyles({
    root: {
        border: '1px solid #14AFF1',
        borderRadius: 7,
        color: 'white',
        height: '2.3vw',
        padding: '0vw 0.9vw',
        margin: '0.3vw 0.6vw',
        fontSize: '1vw',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

const StyledButtonHollowDelete = withStyles({
    root: {
        border: '1px solid #14AFF1',
        borderRadius: 7,
        color: 'white',
        height: '2.3vw',
        padding: '0vw 0.9vw',
        margin: '0.3vw 0.6vw',
        fontSize: '1vw',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);



const StyledCheckbox = withStyles({
    root: {
        '&$checked': {
            color: '#14AFF1',
        },
        color: '#97A1A9',
        height: '1vw',
        borderBottom: "none",
    },
    checked: {},
})(Checkbox);

const StyledInput = withStyles({
    root: {
        // borderBottom: '0px solid black',
        border: '1px solid #14AFF1',
        borderRadius: 10,
        color: 'white',
        height: '2.5vw',
        padding: '0vw 2vw',
        margin: '0.3vw 1vw'
    },
    label: {
        textTransform: 'capitalize',
    },
})(Input);


// function createData(name, cid, iid, iamount, dd, ppd, pab, notes) {
//     return { name, cid, iid, iamount, dd, ppd, pab, notes };
// }



const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    button: {
        '& > *': {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            color: 'white',
        },
    },
    underline: {
        "&&&:before": {
            borderBottom: "none"
        },
        "&&:after": {
            borderBottom: "none"
        }
    },
    '@global': {
        '*::-webkit-scrollbar': {
            width: '0.4em'
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
            backgroundColor: '#2E4350',
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#61707B',
            outline: '1px solid slategrey',
        }
    },
});

// handleSelectAllClick = (event) => {
//     if (event.target.checked) {
//         setChecked(checked => [...oldArray, newElement]);
//       this.setState((state) => ({ selected: state.data.map((n) => n.id) }));
//       return;
//     }
//     this.setState({ selected: [] });
//   };

//   handleCheckboxClick = (event, id) => {
//     event.stopPropagation();
//     console.log("checkbox select");
//     const { selected } = this.state;
//     const selectedIndex = selected.indexOf(id);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, id);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1)
//       );
//     }

//     this.setState({ selected: newSelected });
//   };


let debounceTimer = null;
export default function CustomizedTables() {
    // const { useState } = React;
    const [checked, setChecked] = useState([]);
    const [data, setData] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    const [page, setPage] = useState(1);
    const [openPopup, setOpenPopup] = useState(false)
    const [openPopupEdit, setOpenPopupEdit] = useState(false)
    const [openPopupDelete, setOpenPopupDelete] = useState(false)
    const [openPopupViewCorrospondance, setOpenPopupViewCorrospondance] = useState(false)
    const classes = useStyles();

    const [recordForEdit, setRecordForEdit] = useState(null)
    const [checkList, setCheckList] = useState([])
    const [finalCheckItemList, setFinalCheckItemList] = useState([])
    const [docId, setDocId] = useState(0)

    const [searchValue, setSearchValue] = React.useState("");
    const [searchResults, setResults] = React.useState([]);
    const [tableData, setTableData] = React.useState([]);
    const [addAmount, setAddAmount] = React.useState(0);


    useEffect(() => {
        const getData = async () => {
            console.log("IN GET DATA");
            await fetch(`http://localhost:8080/1828049/RetriveInvoiceDataPageServlet?page=${page}`)
                .then((res) => res.json())
                .then((data) => {
                    setData((prev) => [...prev, ...data]);
                    setHasMore(true);
                })
                .catch((err) => console.log(err));
        };
        getData();
    }, [page]);

    useEffect(() => {
        if (searchResults.length > 0) {
            setTableData(data)
            setData(searchResults)
        } else {
            setData(tableData)
        }
    }, [searchResults])

    const fetchMoreData = () => {
        console.log("INSIDE FETCHDATA");
        setPage(page + 1);
    };

    const handleCheckboxClick = (docId) => {
        console.log(`docId=${docId}`)
        if (checkList.indexOf(docId) === -1) {
            console.log('IF')
            setCheckList((prev) => [...prev, docId]);
        } else {
            console.log('ELSE')
            let myList = []
            for (let i = 0; i < checkList.length; i++) {
                if (checkList[i] !== docId) {
                    myList.push(checkList[i])
                }
            }
            setCheckList(myList)
        }

        console.log(`checkList = ${checkList}`)
    }

    function makeFinalCheckedItemList() {
        let tempList = []
        for (let i = 0; i < checkList.length; i++) {
            for (let j = 0; j < data.length; j++) {
                if (checkList[i] == data[j].docId) {
                    tempList.push(data[j])
                }

            }
        }
        setFinalCheckItemList(tempList)
        console.log(`finalCheckItemList=${finalCheckItemList.map(e => e.nameCustomer)}`)
    }

    function addAllAmount() {
        console.log('Inside addAllAmount')
        let sum = 0.0
        for (let i = 0; i < finalCheckItemList.length; i++) {
            console.log(`sum = ${sum}`)
            sum += parseFloat(finalCheckItemList[i].totalOpenAmount)
        }
        setAddAmount(sum)
    }

    function retriveEditItem() {
        if (checkList.length === 0) {
            alert(`Select one item`)
        } else if (checkList.length > 1) {
            alert(`Select only one item`)
        } else if (checkList.length === 1) {
            setDocId(checkList[0])
            // makeFinalCheckedItemList()
            setOpenPopupEdit(true)
            setOpenPopup(false)
            setOpenPopupDelete(false)
        }



    }

    function retriveDeleteItem() {
        if (checkList.length === 0) {
            alert(`Select one item`)
        } else {
            // setDocId(checkList[0])
            // makeFinalCheckedItemList()
            setOpenPopupDelete(true)
            setOpenPopupEdit(false)
            setOpenPopup(false)

        }



    }

    function retriveViewCorrospondanceItem() {

        if (checkList.length === 0) {
            alert(`Select one item`)
        } else {
            makeFinalCheckedItemList()
            addAllAmount()
            setOpenPopupViewCorrospondance(true)
            setOpenPopupDelete(false)
            setOpenPopupEdit(false)
            setOpenPopup(false)

        }
    }

    const getSearchResults = (newSearchVal) => {
        axios
            .get(`http://localhost:8080/1828049/SearchInvoiceDataPageServlet`, {
                params: {
                    invoice_id: newSearchVal,
                    page: 1
                }
            })
            .then((response) => {
                console.log("Search Response Data", response.data);
                setResults(response.data);
                // setData(response.data);
            })
            .then((error) => {
                console.log("Error", error);
            });
    };

    const handleSearchValueChange = (event) => {
        const newSearchVal = event.target.value;
        setSearchValue(newSearchVal);

        // if (newSearchVal.trim().length >= 3) {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            getSearchResults(newSearchVal);
        }, 500);
        // }
        // if (newSearchVal === "") setResults([]);
        // if (newSearchVal === "") setData([]);
    };

    return (
        <div >
            {/* <div style={{ fontSize: '1.47vw', color: 'white', paddingBottom: '1.6vw' }}>Invoice List</div> */}


            <div style={{ padding: '1.2vw 1.6vw 0', backgroundColor: '#273D49CC', borderRadius: '5px' }}>



                <div style={{ paddingBottom: '1vw' }}>
                    <span style={{}}>
                        <StyledButtonSolid style={{ marginLeft: '0px' }}>Predict</StyledButtonSolid>
                        <StyledButtonHollow onClick={() => retriveViewCorrospondanceItem()}>View Correspondence</StyledButtonHollow>
                    </span>
                    <span style={{ float: 'right' }}>
                        {/* <AddButton /> */}
                        <StyledButtonHollowAdd startIcon={<AddIcon />} onClick={() => setOpenPopup(true)}>Add</StyledButtonHollowAdd>
                        {/* <StyledButtonHollowEdit startIcon={<EditIcon />} onClick={() => setOpenPopupEdit(true)}>Edit</StyledButtonHollowEdit> */}
                        <StyledButtonHollowEdit startIcon={<EditIcon />} onClick={() => retriveEditItem()}>Edit</StyledButtonHollowEdit>

                        <StyledButtonHollowDelete startIcon={<RemoveIcon />} onClick={() => retriveDeleteItem()}>Delete</StyledButtonHollowDelete>
                        <input style={{ border: '1px solid #14AFF1', borderRadius: '0.7vw', width: '16vw', height: '2.1vw', margin: '0.3vw 0.5vw', padding: '0px 0.5vw', color: 'white', backgroundColor: '#283A46', background: { SearchIcon }, outline: 'none' }} placeholder="Search By Invoice Number" className="customInput" onChange={handleSearchValueChange} />
                    </span>
                    <MyPopUp openPopup={openPopup} setOpenPopup={setOpenPopup}>

                    </MyPopUp>
                    <EditPopUp docId={docId} openPopupEdit={openPopupEdit} setOpenPopupEdit={setOpenPopupEdit}>

                    </EditPopUp>
                    <DeletePopUp checkList={checkList} openPopupDelete={openPopupDelete} setOpenPopupDelete={setOpenPopupDelete}>

                    </DeletePopUp>
                    {/* <ViewCorrospondancePopUp finalCheckItemList={finalCheckItemList} openPopupViewCorrospondance={openPopupViewCorrospondance} setOpenPopupViewCorrospondance={setOpenPopupViewCorrospondance}>

                    </ViewCorrospondancePopUp> */}
                    <ViewCorrespondenceModal totalAmount={addAmount} finalCheckItemList={finalCheckItemList} openPopupViewCorrospondance={openPopupViewCorrospondance} setOpenPopupViewCorrospondance={setOpenPopupViewCorrospondance}>

                    </ViewCorrespondenceModal>


                </div>





                <TableContainer id="table-container" style={{ maxHeight: '70vh', background: '#273D49CC' }} component={Paper}>

                    <InfiniteScroll
                        dataLength={data.length}
                        scrollableTarget="table-container"
                        next={fetchMoreData}
                        hasMore={hasMore}
                        loader={
                            <div
                                style={{
                                    textAlign: "center",
                                    marginTop: "10px",
                                    marginBottom: "10px",
                                }}
                            >
                                <CircularProgress color="secondary" style={{ fontSize: "10px" }} />
                            </div>
                        }
                    >
                        <Table stickyHeader className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <ThemeProvider theme={themeCheckBox}>
                                        <StyledTableCell padding="checkbox" >

                                            <StyledCheckbox
                                            // onChange={handleSelectAllClick} 
                                            />
                                        </StyledTableCell>
                                    </ThemeProvider>
                                    <StyledTableCell>Customer Name</StyledTableCell>
                                    <StyledTableCell>Customer #</StyledTableCell>
                                    <StyledTableCell>Invioce #</StyledTableCell>
                                    <StyledTableCell>Invioce Amount</StyledTableCell>
                                    <StyledTableCell align="right">Due Date</StyledTableCell>
                                    <StyledTableCell align="right">Predicted Payment Date</StyledTableCell>
                                    <StyledTableCell>Predicted Aging Bucket</StyledTableCell>
                                    <StyledTableCell>Notes</StyledTableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>

                                {data.map((d) => (
                                    <StyledTableRow key={d.docId}>
                                        <ThemeProvider theme={themeCheckBox}>
                                            <TableCell className="selectCheckbox" padding="checkbox">

                                                <StyledCheckbox onClick={(e) => handleCheckboxClick(d.docId)}
                                                // onClick={(event) =>
                                                // handleCheckboxClick(event, row.id)
                                                // }
                                                // className="selectCheckbox"
                                                // checked={isSelected}
                                                />


                                            </TableCell>
                                        </ThemeProvider>
                                        <StyledTableCell component="th" scope="row">
                                            {d.nameCustomer}
                                        </StyledTableCell>
                                        <StyledTableCell>{d.custNumber}</StyledTableCell>
                                        <StyledTableCell>{d.invoiceId}</StyledTableCell>
                                        <StyledTableCell>{d.totalOpenAmount}</StyledTableCell>
                                        <StyledTableCell align="right">{d.dueInDate}</StyledTableCell>
                                        <StyledTableCell align="right">{"--"}</StyledTableCell>
                                        <StyledTableCell>{"--"}</StyledTableCell>
                                        <StyledTableCell>{d.notes}</StyledTableCell>
                                    </StyledTableRow>
                                ))}

                            </TableBody>


                        </Table>
                    </InfiniteScroll>
                </TableContainer>

            </div>

        </div>

    );
}