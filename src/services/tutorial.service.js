import http from '../http-common';

class TutorialDataService {
    getAll() {
        return http.get('/tutorials');
    }

    get(Number) {
        return http.get(`/tutorials/${Number}'`); //or U can use ('/tutorials' + id)
    }

    create(data) {
        return http.post('/tutorials', data);
    }

    update(Number, data) {
        return http.post('/tutorials' + Number, data);
    }

    delete(Number) {
        return http.delete('/tutorials' + Number);
    }

    deleteAll() {
        return http.delete('/tutorials' );
    }

    findByTitle(id, Name, Lastname, University, Finished) {
        return http.get('/tutorial?id = ' + id, '/tutorial?Name = ' + Name, '/tutorial?Lastname = ' + Lastname, '/tutorial?University = ' + University, '/tutorial?Finished = ' + Finished)
    }
}
export default new TutorialDataService();