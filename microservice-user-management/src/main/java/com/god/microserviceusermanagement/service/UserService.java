package com.god.microserviceusermanagement.service;

import com.god.microserviceusermanagement.model.User;

import java.util.List;

public interface UserService {
    User save(User user);
    User findByUsername(String username);
    List<String> findByUsers(List<Long> idList);
}
