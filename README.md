# Bitcoin-Arbitrage-Bot
  Single Page App using Go, Node, React 

## combination of synch and asynch, real-time and event service systems.
  - C/S High performance provided by Golang to handle concurrent, real-time synch RESTful price ticker from 10 bitcoin exchange markets
  - B/S Asynch data communication and visualization by Node and React

## Project Architecture
![image](https://user-images.githubusercontent.com/24782000/38705411-7f18f74e-3e77-11e8-9052-314261ffa20d.png)

### usage
  - in subproject "GoBot", run makefile script
    - "make all": rebuild then run
    - "make run": executing go bot
  - in subproject "Mern", run npm script
    - "npm run start-db": start mongod service
    - "npm run init-db" : init/ empty mongo
    - "npm run dev-all" : start webpack devServer
    - "npm run compile-react" : building react production
    - "npm run compile-node" : building node production
  - client port : 
    - devServer: localhost:8000
    - server:  localhost:3000
  
## Roadmap
- [x] Go bot
  - [x] 9 exchanges RESTful APIs
  - [x] pull price ticker
  - [x] synch architecture design
  - [x] send data to Node by RESTful Post
  - [x] simulator trade logic (delay hardcoded) 
- [x] Node server
  - [x] REST APIs design
  - [x] MongoDB
  - [x] Webpack: devServer, app and vendor bindles
  - [x] pull data from node using whatwg-fetch
- [x] React
  - [x] Rechart for chart UI
  - [x] React-Boostrap Grid
  - [x] React boostrap Navbar: play, pause control button
  - [x] React boostrap Modal for Rechart's click zoom-in
  - [x] React boostrap Navbar: menu popover for help messages
  - [x] react gauge for profit monitor UI
- [ ] todo
  - [ ] Websocket for pushing ticker from node to client
  - [ ] GraphQL for various exchange REST APIs

## React Single Page App screenshot
charts grid | big chart modal
---- | ----
![chart_grid](https://user-images.githubusercontent.com/24782000/39147446-9bbbb560-4707-11e8-8c18-09e9127bdd97.png)|![big chart on modal](https://user-images.githubusercontent.com/24782000/39147469-a8b80f0c-4707-11e8-9ee6-43a2e76389f6.png)

navbar menu | trade monitor gauges
----------- | --------------------
![navbar_menulist](https://user-images.githubusercontent.com/24782000/39147466-a8865dfe-4707-11e8-880b-01dd70a6bf16.png) | ![trade analysis gauges](https://user-images.githubusercontent.com/24782000/39147468-a8adaf6c-4707-11e8-9434-15042d2051a7.png)

real-time trade list | mongo document
-------------------- | --------------
![real-time trade list](https://user-images.githubusercontent.com/24782000/39147467-a89b487c-4707-11e8-898c-fd2973260229.png) | ![mongodb](https://user-images.githubusercontent.com/24782000/39147465-a87192fc-4707-11e8-93a8-73d4dfbe20cf.png)

react-tree | null
-----------|----
![react-tree](https://user-images.githubusercontent.com/24782000/39149734-209be042-470e-11e8-8285-2b3aa738b1eb.png) | ![react-tree](https://user-images.githubusercontent.com/24782000/39149734-209be042-470e-11e8-8285-2b3aa738b1eb.png)




## Part of Tech Probes

" " | " "
--------------| -------------
![image](https://user-images.githubusercontent.com/24782000/38705411-7f18f74e-3e77-11e8-9052-314261ffa20d.png) | ![image](https://user-images.githubusercontent.com/24782000/38848058-f77cc734-41d2-11e8-9f64-ede3b54c5a3e.png)
![image](https://user-images.githubusercontent.com/24782000/38705452-98f4424a-3e77-11e8-9d46-57ab5e602f9c.png) | ![image](https://user-images.githubusercontent.com/24782000/38705468-a253a8f8-3e77-11e8-8c4e-1936276755f2.png)
![image](https://user-images.githubusercontent.com/24782000/38705489-adc6b4be-3e77-11e8-8bf7-33dba529806f.png) | ![image](https://user-images.githubusercontent.com/24782000/38705522-c8bf3ebc-3e77-11e8-84d8-bece65044a10.png)
![image](https://user-images.githubusercontent.com/24782000/38705531-d42a705a-3e77-11e8-9bd4-628fa3ddbf8b.png) | ![image](https://user-images.githubusercontent.com/24782000/38705554-e3ec5a08-3e77-11e8-8400-dc0aa3a791d3.png)
![image](https://user-images.githubusercontent.com/24782000/38705572-fa221e52-3e77-11e8-9366-f0602a9cb9dc.png) | ![image](https://user-images.githubusercontent.com/24782000/38848087-1f3ca212-41d3-11e8-866c-2364b5121cb7.png)

