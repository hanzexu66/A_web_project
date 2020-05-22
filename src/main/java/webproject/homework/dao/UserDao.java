package webproject.homework.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Update;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import webproject.homework.entity.User;
import webproject.homework.entity.cart;

import java.util.List;

@Repository
public interface UserDao extends JpaRepository<User,Integer> {
  @Query(value = "select * from user where email=:email and password=:mima",nativeQuery = true)
   List<User> find(String email, String mima);

    @Query(value = "select * from user where email=:email",nativeQuery = true)
    List<User> search(String email);



}