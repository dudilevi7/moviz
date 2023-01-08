import React, { useState, useEffect, useCallback } from 'react'
import api from '../../api/api'
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner'
import MUIDataTable from 'mui-datatables';
import createMuiTheme from './Table.css';
import { ThemeProvider } from '@mui/material/styles';
import { COLORS } from '../../consts';
import ErrorPage from '../ErrorPage/ErrorPage';
import debounce from 'lodash/debounce'

const Table = () => {
    const [data, setData] = useState({})
    const [error, setError] = useState(false)


    const fetchData = useCallback(async (overrideParams = {}) => {
        const {
            search,
            pageNum,
            pageSize,
            colSort,
            colOrder,
        } = data

        const params = {
            search,
            pageNum,
            pageSize,
            colSort,
            colOrder,
            ...overrideParams
        }
        const response = await api('movies', {
            method: 'get',
            params,
        })
        if (response) {
            setError(false)
            setData(response)
        }
        else {
            setError(true)
        }
    }, [data])

    useEffect(() => {
            const initializeData = async () => {
                const data = await api('movies', { method: 'get' })
                if (data) {
                    setTimeout(() => {
                        setError(false)
                        console.log({ data })
                        setData(data)
                    }, 500)
                }
                else {
                    setError()
                }
            }
            initializeData()
    }, [])

    if (error) return <ErrorPage />
    if (!data.rowsData) return <LoaderSpinner />

    const onSearchInputChange = (searchInput = '') => {
        const debouncer = debounce(() => fetchData({ search: searchInput }), 500)
        debouncer()
    }
    const onSortChange = (column = '', direction) => {
        const colLowerCase = column.toLowerCase()
        fetchData({ colSort: colLowerCase, colOrder: direction })
    }
    const onChangePageNum = (newPage) => {
        fetchData({ pageNum: newPage + 1 })

    }
    const onChangePageSize = (size) => {
        fetchData({ pageSize: size })
    }

    const options = {
        filter: false,
        selectableRows: 'none',
        viewColumns: false,
        responsive: 'standard',
        tableBodyHeight: '100%',
        serverSide: true,
        rowsPerPageOptions: [5, 10, 30, 50, 70],
        onSearchChange: onSearchInputChange,
        onColumnSortChange: onSortChange,
        onChangePage: onChangePageNum,
        onChangeRowsPerPage: onChangePageSize,
        count: data.availableMovies || 0
    };

    return (
        <React.Fragment>
            <ThemeProvider theme={createMuiTheme(COLORS.primary, COLORS.secondary)}>
                <MUIDataTable
                    title="Movies"
                    data={data.rowsData}
                    columns={data.columns}
                    options={options}
                />
            </ThemeProvider>
        </React.Fragment>
    )
}

export default Table