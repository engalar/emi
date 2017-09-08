package com.esquel.emi.graphql.types;

import com.esquel.emi.model.Specialty;

/**
 * @author Nils Hartmann (nils@nilshartmann.net)
 */
public class AddSpecialtyPayload {

    private final Specialty specialty;

    public Specialty getSpecialty() {
        return specialty;
    }

    public AddSpecialtyPayload(Specialty specialty) {
        this.specialty = specialty;
    }
}
