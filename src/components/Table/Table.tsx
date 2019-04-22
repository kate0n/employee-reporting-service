import ReactTable from 'react-table';
import React from 'react';
import {Component} from "react";
import 'react-table/react-table.css';


export class Table extends Component {
    render() {
        const data = [{
            name: 'Максимов Даниил',
            date: "2019.04.11",
            object: "Комарова 16-01-21",
            start: "10:30",
            end: "14:30",
            time: 4,
            category: "РП",
            description: "Рабочая документация"

        }]

        const columns = [{
            Header: 'Имя',
            accessor: 'name' // String-based value accessors!
        },
            {
                Header: 'Дата',
                accessor: 'date' // String-based value accessors!
            },
            {
                Header: 'Объект/Шифр',
                accessor: 'object' // String-based value accessors!
            },
            {
                Header: 'Начало',
                accessor: 'start' // String-based value accessors!
            },
            {
                Header: 'Конец',
                accessor: 'end' // String-based value accessors!
            },
            {
                id: 'time', // Required because our accessor is not a string
                Header: 'Время',
                accessor: (d: any) => d.time // Custom value accessors!
            },
            {
                Header: 'Категория',
                accessor: 'category' // String-based value accessors!
            },
            {
                Header: 'Описание',
                accessor: 'description' // String-based value accessors!
            },]

        return <ReactTable
            data={data}
            columns={columns}
        />
    }
}

export default Table;