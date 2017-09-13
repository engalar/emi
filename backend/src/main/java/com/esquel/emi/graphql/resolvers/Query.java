/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.esquel.emi.graphql.resolvers;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.google.common.collect.Lists;
import com.esquel.emi.graphql.types.VisitConnection;
import com.esquel.emi.model.*;
import com.esquel.emi.repository.*;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Resolver for PetClinic Queries
 *
 * @author Nils Hartmann (nils@nilshartmann.net)
 */
@Component
@SuppressWarnings("unused")
public class Query implements GraphQLQueryResolver {

    private final PetTypeRepository petTypeRepository;
    private final VetRepository vetRepository;
    private final OwnerRepository ownerRepository;
    private final PetRepository petRepository;
    private final SpecialtyRepository specialtyRepository;
    private final DefectDetailTypeRepository defectDetailTypeRepository;

    public Query(PetTypeRepository petTypeRepository, VetRepository vetRepository, OwnerRepository ownerRepository, PetRepository petRepository, SpecialtyRepository specialtyRepository,DefectDetailTypeRepository defectDetailTypeRepository) {
        this.petTypeRepository = petTypeRepository;
        this.vetRepository = vetRepository;
        this.ownerRepository = ownerRepository;
        this.petRepository = petRepository;
        this.specialtyRepository = specialtyRepository;

        this.defectDetailTypeRepository = defectDetailTypeRepository;
    }
    public List<DefectRatio> defectatios(){
        DefectRatio defectRatio = new DefectRatio();
        defectRatio.setId(1);
        defectRatio.setName("name2");
        return Lists.newArrayList(defectRatio);
    }

    public List<DefectDetailType> detail(DefectRatio dr) {
        return Lists.newArrayList(defectDetailTypeRepository.find(dr));
    }

    public List<PetType> pettypes() {
        return Lists.newArrayList(petTypeRepository.findAll());
    }

    public List<Vet> vets() {
        return Lists.newArrayList(vetRepository.findAll());
    }

    public List<Owner> owners() {
        return Lists.newArrayList(ownerRepository.findAll());
    }

    public Owner owner(int id) {
        return ownerRepository.findById(id);
    }

    public Pet pet(int id) {
        return petRepository.findById(id);
    }

    public List<Pet> pets() {
        return Lists.newArrayList(petRepository.findAll());
    }

    public List<Specialty> specialties() {
        return Lists.newArrayList(specialtyRepository.findAll());
    }

    public VisitConnection getVisitConnection() {
        return new VisitConnection(null);
    }

    public String engalar(){return "liuwengao";}

}
