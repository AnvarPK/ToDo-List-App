import React, { lazy, Suspense } from 'react';
import { Route, Routes as DomRoutes } from "react-router-dom";
import { APP_CONSTANTS } from '../appconsts';

import Home from '../pages/home';
const CreateTodo = lazy(() => import('../pages/create'));
const DeletedTodos = lazy(() => import('../pages/deleted'));
const EditTodo = lazy(() => import('../pages/edit'));

const Routes = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <DomRoutes>
                <Route path={APP_CONSTANTS.ROUTES.HOME} element={<Home />} />
                <Route path={APP_CONSTANTS.ROUTES.CREATE_TODO} element={<CreateTodo />} />
                <Route path={APP_CONSTANTS.ROUTES.DELETED_TODOS} element={<DeletedTodos />} />
                <Route path={APP_CONSTANTS.ROUTES.EDIT_TODO} element={<EditTodo />} />
            </DomRoutes>
        </Suspense>
    );
};
export default Routes;