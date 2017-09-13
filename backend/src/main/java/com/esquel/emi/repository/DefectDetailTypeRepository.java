package com.esquel.emi.repository;

import com.esquel.emi.model.DefectDetailType;
import com.esquel.emi.model.DefectRatio;

import java.util.Collection;

public interface DefectDetailTypeRepository {
    Collection<DefectDetailType> find(DefectRatio dr);
}
