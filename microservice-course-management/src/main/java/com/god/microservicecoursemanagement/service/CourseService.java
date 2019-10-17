package com.god.microservicecoursemanagement.service;

import com.god.microservicecoursemanagement.model.Course;
import com.god.microservicecoursemanagement.model.Transaction;

import java.util.List;

public interface CourseService {

    List<Course> allCourses();
    Course findCourseById(Long courseId);
    List<Transaction> findTransactionsOfUser(Long userId);
    List<Transaction> findTransactionsOfCourse(Long courseId);
    Transaction saveTransaction(Transaction transaction);
}
