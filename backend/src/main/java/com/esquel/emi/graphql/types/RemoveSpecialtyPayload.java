package com.esquel.emi.graphql.types;

import com.esquel.emi.model.Specialty;

import java.util.List;

/**
 * @author Nils Hartmann (nils@nilshartmann.net)
 */
public class RemoveSpecialtyPayload {

    private final List<Specialty> specialties;

    public RemoveSpecialtyPayload(List<Specialty> specialties) {
        this.specialties = specialties;
    }

    public List<Specialty> getSpecialties() {
        return specialties;
    }
}
