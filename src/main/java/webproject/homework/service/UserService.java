package webproject.homework.service;

import webproject.homework.entity.User;
import webproject.homework.entity.cart;
import webproject.homework.entity.od;

import java.util.List;

public interface UserService {
    List<User> find(String email, String mima);
    Boolean search(String email);
    boolean addUser(User u);
    boolean addCart(cart c);
    List<cart> searchCart(int uid);
    List<od> findod(int uid);
    void addOrder(od o);
    boolean buyOne(int uid,int id);
}
