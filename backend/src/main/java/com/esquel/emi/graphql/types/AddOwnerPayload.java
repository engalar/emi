package com.esquel.emi.graphql.types;

import com.esquel.emi.model.Owner;

/**
 * @author Nils Hartmann (nils@nilshartmann.net)
 */
public class AddOwnerPayload extends AbstractOwnerPayload {

    public AddOwnerPayload(Owner owner) {
        super(owner);
    }
}
