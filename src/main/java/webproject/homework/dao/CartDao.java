package webproject.homework.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import webproject.homework.entity.User;
import webproject.homework.entity.cart;

import javax.transaction.Transactional;
import java.util.List;

public interface CartDao extends JpaRepository<cart,Integer> {
    @Query(value = "select * from cart where uid=:uid and id=:id",nativeQuery = true)
    List<cart> islike(int uid, int id);

    @Modifying
    @Transactional
    @Query(value = "update cart set num=num+1 where uid=:uid and id=:id")
    void add1(int uid,int id);

    @Query(value = "select * from cart where uid=:uid",nativeQuery = true)
    List<cart> searchCart(int uid);

    @Modifying
    @Transactional
    @Query(value = "delete from cart where uid=:uid and id=:id")
    void deletecart(int uid,int id);
}
