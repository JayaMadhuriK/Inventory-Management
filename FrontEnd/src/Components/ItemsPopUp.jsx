import {Grid} from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import './AdminBoard.scss'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const columns =[
    { field: 'itemId', headerName: 'Item Id'},
    { field: 'itemName', headerName: 'Item Name', sortable: true},
    { field: 'category', headerName: 'Category', sortable: true},
    { field: 'billNumber', headerName: 'Bill Number'},
    { field: 'dateOfPurchase', headerName: 'Date of Purchase'},
    { field: 'warranty', headerName: 'Warranty'},
    { field: 'expireDate', headerName: 'Expire Date'},
];
const ItemsPopUp = (props) =>{
    const {selectedItems,setSelectedItems} = props
    const [itemData,setItemData] = useState([])
    const formattedRows = itemData.map((item,index)=>({
        id:item.itemId,
        ...item,
    }));
    const onRowsSelectionHandler = (ids) => {
        const selectedRowsData = ids.map((id) => formattedRows.find((row) => row.id == id));
        setSelectedItems(selectedRowsData);
      };
    useEffect(() => {
        const getItemData = async () =>{
            try{
                const response =await axios.get('http://localhost:6001/api/inventory/InventoryItems/unassign');
                setItemData(response?.data || []);
            }catch(error) {
                console.error('Error fetching item data:', error);
            }
        };
        getItemData();
      },[]);
      console.log(itemData)
   return (
        <Grid className="items-popup-body">
            <Grid className="grid-btn">
            </Grid>
            {Array.isArray(itemData) && itemData.length > 0 ?(
                <DataGrid
                rows={formattedRows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                      },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                onRowSelectionModelChange={ids =>onRowsSelectionHandler(ids)}
            />
            ):(<p>No item data available</p>)}
            
        </Grid>
   )
}

export default ItemsPopUp;