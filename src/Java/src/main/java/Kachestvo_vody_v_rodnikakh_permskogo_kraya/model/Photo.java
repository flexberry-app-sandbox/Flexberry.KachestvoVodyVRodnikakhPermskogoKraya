package Kachestvo_vody_v_rodnikakh_permskogo_kraya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kachestvo_vody_v_rodnikakh_permskogo_kraya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Photo
 */
@Entity(name = "IISKachestvo_vody_v_rodnikakh_permskogo_krayaPhoto")
@Table(schema = "public", name = "Photo")
public class Photo {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;


    public Photo() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}