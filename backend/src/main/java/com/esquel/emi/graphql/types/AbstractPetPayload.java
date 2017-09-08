package com.esquel.emi.graphql.types;

import com.esquel.emi.model.Pet;

/**
 * @author Nils Hartmann (nils@nilshartmann.net)
 */
public class AbstractPetPayload {

    private final Pet pet;

    public AbstractPetPayload(Pet pet) {
        this.pet = pet;
    }

    public Pet getPet() {
        return pet;
    }
}
