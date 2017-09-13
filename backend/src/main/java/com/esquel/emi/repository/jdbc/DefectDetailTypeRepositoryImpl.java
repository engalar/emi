package com.esquel.emi.repository.jdbc;

import com.esquel.emi.model.DefectDetailType;
import com.esquel.emi.model.DefectRatio;
import com.esquel.emi.model.Owner;
import com.esquel.emi.repository.DefectDetailTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
@Profile("jdbc")
public class DefectDetailTypeRepositoryImpl implements DefectDetailTypeRepository {
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    private SimpleJdbcInsert insertOwner;

    @Autowired
    public DefectDetailTypeRepositoryImpl(DataSource dataSource) {
        this.insertOwner = new SimpleJdbcInsert(dataSource)
                .withTableName("defect_detail")
                .usingGeneratedKeyColumns("id");

        this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
    }

    @Override
    public Collection<DefectDetailType> find(DefectRatio dr) {
        Map<String, Object> params = new HashMap<>();
        params.put("id", dr.getId());
        List<DefectDetailType> owners = this.namedParameterJdbcTemplate.query(
                "SELECT id, name, score FROM defect_detail WHERE id = :id",
                params,
                BeanPropertyRowMapper.newInstance(DefectDetailType.class)
        );
        return owners;
    }
}
