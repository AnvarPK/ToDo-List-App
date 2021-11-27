import React, { lazy, Suspense } from 'react';
import { Route, Routes as DomRoutes } from "react-router-dom";

import Home from '../pages/home';
const CreateTodo = lazy(() => import('../pages/create'));
const DeletedTodos = lazy(() => import('../pages/deleted'));
const EditTodo = lazy(() => import('../pages/deleted'));

const Routes = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <DomRoutes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<CreateTodo />} />
                <Route path="/deleted-todos" element={<DeletedTodos />} />
                <Route path="/edit/:id" element={<EditTodo />} />
            </DomRoutes>
        </Suspense>
    );
};
export default Routes;