package webproject.homework.controller;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import webproject.homework.entity.User;
import webproject.homework.entity.cart;
import webproject.homework.entity.od;
import webproject.homework.service.UserServiceImpl;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
public class UserController {
    @Autowired
    private HttpSession session;

    @Autowired
    private HttpServletRequest request;

    @Resource
    private UserServiceImpl usi;

    @RequestMapping("/isOnline")
    @ResponseBody
    public Integer isOnline(){
        Object h=session.getAttribute("uid");
        if(h==null) return -1;
        else return (Integer)h ;
    }

    @RequestMapping("/logout")
    @ResponseBody
    public Boolean logout(){
        session.removeAttribute("uid");
        return true;
    }

    @RequestMapping(value = "/loginin")
    @ResponseBody
    public Boolean login(User user) {
        if (user != null) {
            System.out.println(user.email);
            System.out.println(user.password);
            System.out.println(usi.find(user.email, user.password).size());
            System.out.println(session.getAttribute("uid"));
            List<User> users=usi.find(user.email, user.password);
            if( users.size()!= 0){
                session.setAttribute("uid",users.get(0).getUid());
                System.out.println(session.getAttribute("uid"));
                return true;
            }
            else return false;
        } else {
            return false;
        }
    }

    @RequestMapping(value = "/register")
    @ResponseBody
    public Boolean register(User user) {
        if (usi.search(user.email)) {
            System.out.println(user.email);
            System.out.println(user.password);
            return usi.addUser(user);
        } else {
            return false;
        }
    }

    @RequestMapping(value = "/addCart")
    @ResponseBody
    public Boolean addCart(int id){
        if(session.getAttribute("uid")!=null){
            cart c=new cart((Integer)session.getAttribute("uid"),id,1);
            return usi.addCart(c);
        }
        return false;
    }

    @RequestMapping(value = "/searchCart")
    @ResponseBody
    public List<cart> searchCart(){
        if(session.getAttribute("uid")!=null){
            return usi.searchCart((Integer)session.getAttribute("uid"));
        }
        return usi.searchCart(-1);
    }

    @RequestMapping(value = "/addOrder")
    @ResponseBody
    public boolean addOrder(@RequestBody JSONObject jsonParam){
        System.out.println(jsonParam.toJSONString());
        JSONArray ja=jsonParam.getJSONArray("a");
        for(int i=0;i<ja.size();i++){
            od o=new od((Integer) ja.getJSONObject(i).get("uid"), (Integer) ja.getJSONObject(i).get("id"),
                    (Integer) ja.getJSONObject(i).get("num"));
            usi.addOrder(o);
        }
        return true;
    }

    @RequestMapping(value = "/findOrder")
    @ResponseBody
    public List<od> find(){
        if(session.getAttribute("uid")!=null){
            return usi.findod((Integer)session.getAttribute("uid"));
        }
        return usi.findod(-1);
    }

    @RequestMapping(value = "/buyOne")
    @ResponseBody
    public boolean buyOne(int id){
        if(session.getAttribute("uid")!=null){
            return usi.buyOne((Integer) session.getAttribute("uid"),id);
        }
        return false;
    }
}
