const expect = require('chai').expect
const saveEffortMW = require('../middlewares/efforts/saveEffortMW')

describe('saveEffort middleware ', function () {
    it("should return 200 and empty array with correct parameters when it creates a new effort", () => {
        const fakeEffortModel = class EffortModel {
            save(cb){
                return cb(undefined)
            }
        }

        const req = {
            body: {
                name: "futó kör",
                time: "2:5:3",
                type: 2
            }
        }

        const res = {
            status: (code) => {
                return {
                    json: (obj) => {return {errors: obj.errors, status: code}}
                }
            },
            locals: {
                route: {
                    id: 2
                }
            }
        }

        const saveMW = saveEffortMW({EffortModel: fakeEffortModel})
        const result = saveMW(req, res)
        expect(result).to.eql({errors: [], status: 200})
    })

    it("should return 200 and empty array with correct parameters when it updates an existing effort", () => {
        const req = {
            body: {
                name: "futó kör",
                time: "2:5:3",
                type: 2
            }
        }

        const res = {
            status: (code) => {
                return {
                    json: (obj) => {return {errors: obj.errors, status: code}}
                }
            },
            locals: {
                route: {
                    id: 2
                },
                effort: {
                    save: (cb) => cb(undefined)
                }
            }
        }

        const saveMW = saveEffortMW()
        const result = saveMW(req, res)
        expect(result).to.eql({errors: [], status: 200})
    })

    it("should return 400 and an array with errors after incorrect parameters", () => {
        const req = {
            body: {
                name: "  ",
                time: "2:5",
                type: 0
            }
        }

        const res = {
            status: (code) => ({
                json: (obj) => ({errors: obj.errors, status: code})
            }),
            locals: {
                route: {
                    id: 2
                }
            }
        }

        const saveMW = saveEffortMW({})
        const result = saveMW(req, res)
        expect(result).to.eql({errors: ['Add meg a teljesítő nevét!', 'Érvénytelen időformátum! Helyesen: óó:pp:mm', 'Érvénytelen teljesítési mód!'], status: 400})
    })

    it("should return 400 and an array with other errors after other incorrect parameters", () => {
        const req = {
            body: {
                name: "",
                time: "2:sad:4",
                type: "xd"
            }
        }

        const res = {
            status: (code) => ({
                json: (obj) => ({errors: obj.errors, status: code})
            }),
            locals: {
                route: {
                    id: 2
                }
            }
        }

        const saveMW = saveEffortMW({})
        const result = saveMW(req, res)
        expect(result).to.eql({errors: ['Add meg a teljesítő nevét!', 'Érvénytelen óra, perc vagy másodperc!', 'Érvénytelen teljesítési mód!'], status: 400})
    })

    it("should return 400 and an array with other errors after other incorrect parameters", () => {
        const req = {
            body: {
                name: "gdfgfd",
                time: "",
                type: 5
            }
        }

        const res = {
            status: (code) => ({
                json: (obj) => ({errors: obj.errors, status: code})
            }),
            locals: {
                route: {
                    id: 2
                }
            }
        }

        const saveMW = saveEffortMW({})
        const result = saveMW(req, res)
        expect(result).to.eql({errors: ['Add meg a teljesítés időtartamát!', 'Érvénytelen teljesítési mód!'], status: 400})
    })

    it("should return error when db returns error", (done) => {
        const req = {
            body: {
                name: "gdfgdf",
                time: "2:4:4",
                type: 2
            }
        }

        const res = {
            locals: {
                route: {
                    id: 2
                }
            }
        }

        const fakeEffortModel = class EffortModel {
            save(cb){
                return cb("hiba")
            }
        }

        const saveMW = saveEffortMW({EffortModel: fakeEffortModel})
        saveMW(req, res, (err) => {
            expect(err).to.eql('hiba');
            done();
        })
    })
})
