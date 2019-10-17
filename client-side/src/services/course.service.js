import axios from 'axios';

let API_URL = 'http://localhost:8765/api/course/service/';

class CourseService {
    createTransaction(transaction) {
        return axios.post(API_URL + 'enroll' , JSON.stringify(transaction), {headers: {'Content-Type': 'application/json; charset=UTF-8'}});
    }

    filterTransaction(userId) {
        return axios.get(API_URL + 'user/' + userId,{headers: {'Content-Type': 'application/json; charset=UTF-8'}});
    }

    filiterStudents(courseId) {
        return axios.get(API_URL + 'course/' + courseId, {headers: {'Content-Type': 'application/json; charset=UTF-8'}});
    }

    findAllCourses() {
        return axios.get(API_URL + 'all', {headers: {'Content-Type': 'application/json; charset=UTF-8'}});
    }
}

export default new CourseService();