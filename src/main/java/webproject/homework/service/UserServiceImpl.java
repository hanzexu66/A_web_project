package webproject.homework.service;

import org.springframework.stereotype.Service;
import webproject.homework.dao.CartDao;
import webproject.homework.dao.OrderDao;
import webproject.homework.dao.UserDao;
import webproject.homework.entity.User;
import webproject.homework.entity.cart;
import webproject.homework.entity.od;

import javax.annotation.Resource;
import java.util.List;

@Service()
public class UserServiceImpl implements UserService {
    @Resource
    private UserDao userDao;

    @Resource
    private CartDao cartDao;

    @Resource
    private OrderDao orderDao;

    @Override
    public List<User> find(String email, String mima) {
        // 通过Mapper的select方法查询用户
        return userDao.find(email,mima);
    }

    @Override
    public Boolean search(String email){
        return (userDao.search(email).size()==0);
    }

    @Override
    public boolean addUser(User u){
        return userDao.save(u)!=null;
    }


    @Override
    public boolean addCart(cart c){
         if(cartDao.islike(c.getUid(),c.id).size()==0){
            cartDao.save(c);
         }
         else cartDao.add1(c.getUid(), c.id);
         return true;
    }

    @Override
    public List<cart> searchCart(int uid){
        return cartDao.searchCart(uid);
    }

    @Override
    public List<od> findod(int uid){
        return orderDao.find(uid);
    }

    @Override
    public void addOrder(od o){
        cartDao.deletecart(o.getUid(),o.getId());
        orderDao.save(o);
    }

    @Override
    public boolean buyOne(int uid,int id){
        od o=new od(uid,id,1);
        orderDao.save(o);
        return true;
    }
}
