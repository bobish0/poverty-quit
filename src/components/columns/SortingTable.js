import React, {useMemo} from 'react';
import {useTable, useSortBy} from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import {COLUMNS} from './columns';
import './table.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'

const upArrow = <FontAwesomeIcon icon={faArrowUp} />
const downArrow = <FontAwesomeIcon icon={faArrowDown} />

export const SortingTable = () => {

    /*These hooks ensure that the data
     isnt re-rendered on every render, so no re-calcualtion
     is necessary */
    const columns = useMemo(() =>COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({
        columns: columns,
        data: data
    },
    useSortBy)
    

    /*Hooks that are given from React-Table to enable easy table creation*/ 
    const { 
        getTableProps,  
        getTableBodyProps, 
        headerGroups,
        footerGroups,  
        rows,
        prepareRow,
    } = tableInstance


    return(

        <table {...getTableProps()}>

            <thead>
{headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                   {headerGroup.headers.map((column) => (   
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}> 
                    {column.render('Header')}
                    
                    <span>
                        {column.isSorted ? (column.isSortedDesc ? upArrow : downArrow) : ''}
                    </span>
                    
            
                    </th>
                    ))}
                </tr>
    ))}

            </thead> 

            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row =>   {

                       prepareRow(row)
                       return (
                        <tr {...row.getRowProps()}>
                            {
                               row.cells.map( cell => {
                                   return <td {...cell.getCellProps()}>
                                    {cell.render('Cell')}
                                   </td>
                               })
                            }
                            
                            <td></td>
                        </tr>
                       )     
                    })}
                
             </tbody>     
             <tfoot>
                 {footerGroups.map((footerGroup) => (
                         <tr {...footerGroup.getFooterGroupProps()}>
                             {
                                 footerGroup.headers.map((column) =>(
                                    <td {...column.getFooterProps}>{ column.render('Footer')}</td>    
                                 ))}
                         </tr>
                     ))}
             </tfoot>

        </table>
    )
}