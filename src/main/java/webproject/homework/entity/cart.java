package webproject.homework.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import java.io.Serializable;

class ProjectId implements Serializable{
    int uid;
    int id;
}

@Data
@Entity
@IdClass(ProjectId.class)
public class cart implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    private int uid;
    @Id
    public int id;


    public int num;

    public cart(int uid,int id,int num){
        this.uid=uid;
        this.num=num;
        this.id=id;
    }
    public cart(){

    }
}
