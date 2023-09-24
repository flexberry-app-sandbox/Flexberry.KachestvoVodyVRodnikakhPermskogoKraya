package Kachestvo_vody_v_rodnikakh_permskogo_kraya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kachestvo_vody_v_rodnikakh_permskogo_kraya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: User
 */
@Entity(name = "IISKachestvo_vody_v_rodnikakh_permskogo_krayaUser")
@Table(schema = "public", name = "User")
public class User {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "userId")
    private String userid;

    @Column(name = "userLogin")
    private String userlogin;

    @Column(name = "userType")
    private Integer usertype;


    public User() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getuserId() {
      return userid;
    }

    public void setuserId(String userid) {
      this.userid = userid;
    }

    public String getuserLogin() {
      return userlogin;
    }

    public void setuserLogin(String userlogin) {
      this.userlogin = userlogin;
    }

    public Integer getuserType() {
      return usertype;
    }

    public void setuserType(Integer usertype) {
      this.usertype = usertype;
    }


}