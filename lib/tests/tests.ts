import * as chai from "chai";
import chaiHttp = require("chai-http");
import { NextFunction, response } from "express";
import { Response } from "superagent";
import { expect } from "chai";
const server = require("../server");

chai.should();
chai.use(chaiHttp);

describe("Service STORE & WAREHOUSE API", () => {
  /**
   * Store and Warehouse GET end point
   */
  describe("Route GET /api/warestore", () => {
    //   Get data STORE
    it("Should GET data STORE to /api/warestore/store", (done: NextFunction) => {
      chai
        .request(server)
        .get("/api/warestore/store")
        .end((err: any, res: Response) => {
          res.should.have.status(200);
          expect(res).to.be.a("object");
          done();
        });
    });
    // Get data Warehouse
    it("Should GET data STORE to /api/warestore/warehouse", (done: NextFunction) => {
      chai
        .request(server)
        .get("/api/warestore/warehouse")
        .end((err: any, res: Response) => {
          res.should.have.status(200);
          expect(res).to.be.a("object");
          done();
        });
    });
  });

  /**
   * Store and Warehouse GET by ID end point
   */
  describe("Route GET BY ID /api/warestore/:id", () => {
    it("Should GET to /api/warestore/:id", (done: NextFunction) => {
      chai
        .request(server)
        .get(`/api/warestore/40`)
        .end((err: any, res: Response) => {
          res.should.have.status(200);
          expect(res).to.be.a("object");
          done();
        });
    });

    it("Should NOT GET to /api/warestore/:id", (done: NextFunction) => {
      chai
        .request(server)
        .get(`/api/warestore/wrong123wrong`)
        .end((err: any, res: Response) => {
          res.should.have.status(404);
          expect(res).to.be.a("object");
          done();
        });
    });
  });

  /**
   * Warestore Add End Point
   */

  describe("Route POST /api/warestore", () => {
    it("Should POST to /api/warestore", (done: NextFunction) => {
      chai
        .request(server)
        .post("/api/warestore")
        .set("content-type", "application/json")
        .send({
          branch_id: 79,
          warehouse_code: "WARESSTORE",
          location_name: "Cimahi",
          address: "Gunung Batu",
          phone: "083123",
          status: true,
          is_store: true, //Insert store and automatically generate warehouse. If value false, it only add warehouse without store.
        })
        .end((err: any, res: Response) => {
          res.should.have.status(201);
          done();
        });
    });

    it("Should NOT POST to /api/warestore because DUPLICATE WAREHOUSE CODE", (done: NextFunction) => {
      chai
        .request(server)
        .post("/api/warestore")
        .set("content-type", "application/x-www-form-urlencoded")
        .send({
          branch_id: 79,
          warehouse_code: "Alone",
          location_name: "Cimahi",
          address: "Gunung Batu",
          phone: "083123",
          status: true,
          is_store: true,
        })
        .end((err: any, res: Response) => {
          res.should.have.status(500);
          done();
        });
    });
  });

  /**
   * Warestore Update End Point
   */
  describe("Route Update /api/warestore/:id", () => {
    it("Should Update to /api/warestore/:id", (done: NextFunction) => {
      chai
        .request(server)
        .put("/api/warestore/40")
        .send({
          branch_id: 79,
          warehouse_code: "UpdateDongz",
          location_name: "Cimahi",
          address: "Gunung Batu",
          phone: "083123",
          status: true,
          is_store: true,
        })
        .end((err: any, res: Response) => {
          res.should.have.status(202);
          done();
        });
    });

    it("Should NOT Update to /api/warestore/:id because ID NOT FOUND", (done: NextFunction) => {
      chai
        .request(server)
        .put("/api/warestore/5f43asd7c0")
        .send({
          branch_id: 79,
          warehouse_code: "Alone",
          location_name: "Cimahi",
          address: "Gunung Batu",
          phone: "083123",
          status: true,
          is_store: true,
        })
        .end((err: any, res: Response) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  /**
   * Warestore Delete End Point
   */
  describe("Route Delete /warestore/:id", () => {
    // it("Should DELETE to /api/warestore/:id", (done: NextFunction) => {
    //   chai
    //     .request(server)
    //     .delete("/api/warestore/46")
    //     .end((err: any, res: Response) => {
    //       res.should.have.status(202);
    //       done();
    //     });
    // });

    it("Should NOT DELETE to /api/warestore/:id because WRONG INPUT", (done: NextFunction) => {
      chai
        .request(server)
        .delete("/api/warestore/x123")
        .end((err: any, res: Response) => {
          res.should.have.status(500);
          done();
        });
    });

    it("Should NOT DELETE to /api/warestore/:id because ID NOT FOUND", (done: NextFunction) => {
      chai
        .request(server)
        .delete("/api/warestore/99999")
        .end((err: any, res: Response) => {
          res.should.have.status(404);
          done();
        });
    });
  });
});
