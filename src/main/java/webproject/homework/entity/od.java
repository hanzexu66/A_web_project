package webproject.homework.entity;


import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;

@Data
@Entity
public class od {
    @GeneratedValue
    @Id
    private int oid;

    private int uid;
    private int id;
    private int num;
    private String tim;

    public od(){

    }

    public od(int a, int b, int c){
        this.uid=a;
        this.id=b;
        this.num=c;
        Calendar calendar = Calendar.getInstance(Locale.CHINA);
        Date t = calendar.getTime();
        SimpleDateFormat data = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String format = data.format(t);
        System.out.println(format);
        this.tim= format;
    }
}
