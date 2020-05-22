package webproject.homework.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import webproject.homework.entity.od;

import java.util.List;

public interface OrderDao extends JpaRepository<od,Integer> {
    @Query(value = "select * from od where uid=:uid",nativeQuery = true)
    List<od> find(int uid);
}
