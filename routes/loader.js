const path = require('path');
const globby = require('globby');
const express = require('express');

const cleanUp = p => p.split(/\/+/).join('/')

function createRoutesMap(rootPath) {
    // console.log(rootPath);
    try {
        const routesMap = new Map() // routeName : module
        const paths = globby.sync(rootPath, {})
        paths.forEach(modulePath => {
            const routeName = path.basename(modulePath, '.js')
            routesMap.set(routeName, modulePath)
        })
        // console.log(routesMap);
        return routesMap
    } catch (err) {
        throw err
    }
}

function loadRoutes(router, routesMap) {
    routesMap.forEach((routerMdlPath, routeName) => {
        try {
            let mdl = require(routerMdlPath)
            const routePath = `/${routeName}`
            router.use(routePath, mdl)
        } catch (err) {
            throw err
        }
    })
}

function routesLoader(directory) {
    let mainRouter = express.Router(),
        routesMap
    try {
        routesMap = createRoutesMap(directory)
        loadRoutes(mainRouter, routesMap)
    } catch (err) {
        throw err
    }
    return mainRouter
}

module.exports = routesLoader;