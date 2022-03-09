import React from "react";
import {Header} from '../../components/Header/Header'
import { CategoryBar } from "../../components/CategoryBar/CategoryBar";
import {Catalog} from '../../components/Catalog/Catalog'

export function Home () {
    return (
        <div>
            <Header/>
            <CategoryBar/>
            <Catalog/>
        </div>
    )
}