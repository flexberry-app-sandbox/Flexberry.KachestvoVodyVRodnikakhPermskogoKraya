package Kachestvo_vody_v_rodnikakh_permskogo_kraya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kachestvo_vody_v_rodnikakh_permskogo_kraya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Comment
 */
@Entity(name = "IISKachestvo_vody_v_rodnikakh_permskogo_krayaComment")
@Table(schema = "public", name = "Comment")
public class Comment {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "springId")
    private Integer springid;

    @Column(name = "isDeleted")
    private Boolean isdeleted;

    @Column(name = "userId")
    private Integer userid;

    @Column(name = "commentText")
    private String commenttext;

    @Column(name = "commentId")
    private Integer commentid;

    @Column(name = "createDttm")
    private String createdttm;


    public Comment() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getspringId() {
      return springid;
    }

    public void setspringId(Integer springid) {
      this.springid = springid;
    }

    public Boolean getisDeleted() {
      return isdeleted;
    }

    public void setisDeleted(Boolean isdeleted) {
      this.isdeleted = isdeleted;
    }

    public Integer getuserId() {
      return userid;
    }

    public void setuserId(Integer userid) {
      this.userid = userid;
    }

    public String getcommentText() {
      return commenttext;
    }

    public void setcommentText(String commenttext) {
      this.commenttext = commenttext;
    }

    public Integer getcommentId() {
      return commentid;
    }

    public void setcommentId(Integer commentid) {
      this.commentid = commentid;
    }

    public String getcreateDttm() {
      return createdttm;
    }

    public void setcreateDttm(String createdttm) {
      this.createdttm = createdttm;
    }


}