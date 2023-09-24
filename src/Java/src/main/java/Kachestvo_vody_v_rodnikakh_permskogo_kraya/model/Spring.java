package Kachestvo_vody_v_rodnikakh_permskogo_kraya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kachestvo_vody_v_rodnikakh_permskogo_kraya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Spring
 */
@Entity(name = "IISKachestvo_vody_v_rodnikakh_permskogo_krayaSpring")
@Table(schema = "public", name = "Spring")
public class Spring {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "isVerified")
    private Boolean isverified;

    @Column(name = "springLatitude")
    private String springlatitude;

    @Column(name = "springDescription")
    private String springdescription;

    @Column(name = "springName")
    private String springname;

    @Column(name = "springLongtitude")
    private String springlongtitude;

    @Column(name = "quality")
    private Integer quality;


    public Spring() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Boolean getisVerified() {
      return isverified;
    }

    public void setisVerified(Boolean isverified) {
      this.isverified = isverified;
    }

    public String getspringLatitude() {
      return springlatitude;
    }

    public void setspringLatitude(String springlatitude) {
      this.springlatitude = springlatitude;
    }

    public String getspringDescription() {
      return springdescription;
    }

    public void setspringDescription(String springdescription) {
      this.springdescription = springdescription;
    }

    public String getspringName() {
      return springname;
    }

    public void setspringName(String springname) {
      this.springname = springname;
    }

    public String getspringLongtitude() {
      return springlongtitude;
    }

    public void setspringLongtitude(String springlongtitude) {
      this.springlongtitude = springlongtitude;
    }

    public Integer getquality() {
      return quality;
    }

    public void setquality(Integer quality) {
      this.quality = quality;
    }


}