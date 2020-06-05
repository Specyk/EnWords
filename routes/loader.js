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

function loadRoutes(router, root, routesMap) {
    routesMap.forEach((routePath, routeName) => {
        try {
            let mod = require(routePath)
            // console.dir(mod);
            // console.log(`${routeName} : ${typeof mod.default}`)
            let urlRoute = `/${root}/${routeName}`;
            urlRoute = cleanUp(urlRoute)
            // console.log(urlRoute)
            router.use(urlRoute, mod)
        } catch (err) {
            throw err
        }
    })
}

function routesLoader(root, directory) {
    let mainRouter = express.Router(),
        routesMap
    try {
        routesMap = createRoutesMap(directory)
        loadRoutes(mainRouter, root, routesMap)
    } catch (err) {
        throw err
    }
    return mainRouter
}

module.exports = routesLoader;