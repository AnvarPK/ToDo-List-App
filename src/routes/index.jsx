import React, { lazy, Suspense } from 'react';
import { Route, Routes as DomRoutes } from "react-router-dom";
import { AppConsts } from '../appconsts';

import Home from '../pages/home';
const CreateTodo = lazy(() => import('../pages/create'));
const DeletedTodos = lazy(() => import('../pages/deleted'));
const EditTodo = lazy(() => import('../pages/deleted'));

const Routes = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <DomRoutes>
                <Route path={AppConsts.ROUTES.HOME} element={<Home />} />
                <Route path={AppConsts.ROUTES.CREATE_TODO} element={<CreateTodo />} />
                <Route path={AppConsts.ROUTES.DELETED_TODOS} element={<DeletedTodos />} />
                <Route path={AppConsts.ROUTES.EDIT_TODO} element={<EditTodo />} />
            </DomRoutes>
        </Suspense>
    );
};
export default Routes;