/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AddBonusPriceDerivationItems } from './AddBonusPriceDerivationItems';
import { AddBonusPriceDerivationItemsRequestBuilder } from './AddBonusPriceDerivationItemsRequestBuilder';
import { MerchandiseSetNodesApi } from './MerchandiseSetNodesApi';
import { PriceDerivationRulesApi } from './PriceDerivationRulesApi';
import { MerchandiseSetHeadersApi } from './MerchandiseSetHeadersApi';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  Link,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class AddBonusPriceDerivationItemsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AddBonusPriceDerivationItems<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): AddBonusPriceDerivationItemsApi<DeSerializersT> {
    return new AddBonusPriceDerivationItemsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link merchandiseSetNodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MERCHANDISE_SET_NODES: Link<
      AddBonusPriceDerivationItems<DeSerializersT>,
      DeSerializersT,
      MerchandiseSetNodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link priceDerivationRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRICE_DERIVATION_RULE: OneToOneLink<
      AddBonusPriceDerivationItems<DeSerializersT>,
      DeSerializersT,
      PriceDerivationRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link merchandiseSetHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MERCHANDISE_SET_HEADER: OneToOneLink<
      AddBonusPriceDerivationItems<DeSerializersT>,
      DeSerializersT,
      MerchandiseSetHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      MerchandiseSetNodesApi<DeSerializersT>,
      PriceDerivationRulesApi<DeSerializersT>,
      MerchandiseSetHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      MERCHANDISE_SET_NODES: new Link(
        'merchandiseSetNodes',
        this,
        linkedApis[0]
      ),
      PRICE_DERIVATION_RULE: new OneToOneLink(
        'priceDerivationRule',
        this,
        linkedApis[1]
      ),
      MERCHANDISE_SET_HEADER: new OneToOneLink(
        'merchandiseSetHeader',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = AddBonusPriceDerivationItems;

  requestBuilder(): AddBonusPriceDerivationItemsRequestBuilder<DeSerializersT> {
    return new AddBonusPriceDerivationItemsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AddBonusPriceDerivationItems<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AddBonusPriceDerivationItems<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AddBonusPriceDerivationItems<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof AddBonusPriceDerivationItems,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AddBonusPriceDerivationItems,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TENANT: OrderableEdmTypeField<
      AddBonusPriceDerivationItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRICE_DERIVATION_ITEM_ID: OrderableEdmTypeField<
      AddBonusPriceDerivationItems<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PRICE_DERIVATION_RULE_ID: OrderableEdmTypeField<
      AddBonusPriceDerivationItems<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      AddBonusPriceDerivationItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      AddBonusPriceDerivationItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE_CODE: OrderableEdmTypeField<
      AddBonusPriceDerivationItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MERCHANDISE_HIERARCHY_GROUP_ID: OrderableEdmTypeField<
      AddBonusPriceDerivationItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MERCHANDISE_HIERARCHY_GROUP_ID_QUALIFIER: OrderableEdmTypeField<
      AddBonusPriceDerivationItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_OF_MEASURE_CODE: OrderableEdmTypeField<
      AddBonusPriceDerivationItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHANGED_ON: OrderableEdmTypeField<
      AddBonusPriceDerivationItems<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MERCHANDISE_SET_ID: OrderableEdmTypeField<
      AddBonusPriceDerivationItems<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link merchandiseSetNodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MERCHANDISE_SET_NODES: Link<
      AddBonusPriceDerivationItems<DeSerializersT>,
      DeSerializersT,
      MerchandiseSetNodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link priceDerivationRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRICE_DERIVATION_RULE: OneToOneLink<
      AddBonusPriceDerivationItems<DeSerializersT>,
      DeSerializersT,
      PriceDerivationRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link merchandiseSetHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MERCHANDISE_SET_HEADER: OneToOneLink<
      AddBonusPriceDerivationItems<DeSerializersT>,
      DeSerializersT,
      MerchandiseSetHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AddBonusPriceDerivationItems<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link tenant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TENANT: fieldBuilder.buildEdmTypeField('tenant', 'Edm.String', false),
        /**
         * Static representation of the {@link priceDerivationItemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_DERIVATION_ITEM_ID: fieldBuilder.buildEdmTypeField(
          'priceDerivationItemID',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link priceDerivationRuleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_DERIVATION_RULE_ID: fieldBuilder.buildEdmTypeField(
          'priceDerivationRuleID',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'quantity',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('itemID', 'Edm.String', true),
        /**
         * Static representation of the {@link typeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_CODE: fieldBuilder.buildEdmTypeField(
          'typeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link merchandiseHierarchyGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MERCHANDISE_HIERARCHY_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'merchandiseHierarchyGroupID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link merchandiseHierarchyGroupIdQualifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MERCHANDISE_HIERARCHY_GROUP_ID_QUALIFIER:
          fieldBuilder.buildEdmTypeField(
            'merchandiseHierarchyGroupIDQualifier',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link unitOfMeasureCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_OF_MEASURE_CODE: fieldBuilder.buildEdmTypeField(
          'unitOfMeasureCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link changedOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGED_ON: fieldBuilder.buildEdmTypeField(
          'changedOn',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link merchandiseSetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MERCHANDISE_SET_ID: fieldBuilder.buildEdmTypeField(
          'merchandiseSetID',
          'Edm.Int64',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AddBonusPriceDerivationItems)
      };
    }

    return this._schema;
  }
}
