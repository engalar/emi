package com.esquel.emi.graphql.types;

import com.esquel.emi.model.Pet;

/**
 * @author Nils Hartmann (nils@nilshartmann.net)
 */
public class AddPetPayload extends AbstractPetPayload {

    public AddPetPayload(Pet pet) {
        super(pet);
    }
}
