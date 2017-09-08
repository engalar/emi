package com.esquel.emi.graphql.types;

import com.esquel.emi.model.Owner;

/**
 * @author Nils Hartmann (nils@nilshartmann.net)
 */
public class UpdateOwnerPayload extends AbstractOwnerPayload {
    public UpdateOwnerPayload(Owner owner) {
        super(owner);
    }
}
