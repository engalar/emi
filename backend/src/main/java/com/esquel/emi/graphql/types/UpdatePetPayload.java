package com.esquel.emi.graphql.types;

import com.esquel.emi.model.Pet;

/**
 * @author Nils Hartmann (nils@nilshartmann.net)
 */
public class UpdatePetPayload extends AbstractPetPayload {
    public UpdatePetPayload(Pet pet) {
        super(pet);
    }
}
