/**
 * Tao Shu REST API
 * \"Spring Boot REST API for Tao Shu\"
 *
 * OpenAPI spec version: 1.0.0
 * Contact: carlosschuenck@hotmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Aluno } from './aluno';


export interface Presenca {
    aluno?: Aluno;
    data?: string;
    id?: number;
    presenca?: boolean;
}
