package Kachestvo_vody_v_rodnikakh_permskogo_kraya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kachestvo_vody_v_rodnikakh_permskogo_kraya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: UserAll
 */
@Entity(name = "IISKachestvo_vody_v_rodnikakh_permskogo_krayaUserAll")
@Table(schema = "public", name = "UserAll")
public class UserAll {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "userRole")
    private Integer userrole;

    @Column(name = "userMail")
    private String usermail;

    @Column(name = "userLogin")
    private String userlogin;

    @Column(name = "userAvatar")
    private String useravatar;


    public UserAll() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getuserRole() {
      return userrole;
    }

    public void setuserRole(Integer userrole) {
      this.userrole = userrole;
    }

    public String getuserMail() {
      return usermail;
    }

    public void setuserMail(String usermail) {
      this.usermail = usermail;
    }

    public String getuserLogin() {
      return userlogin;
    }

    public void setuserLogin(String userlogin) {
      this.userlogin = userlogin;
    }

    public String getuserAvatar() {
      return useravatar;
    }

    public void setuserAvatar(String useravatar) {
      this.useravatar = useravatar;
    }


}