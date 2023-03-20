import { IsNotEmpty } from "class-validator";
import { Length } from 'class-validator';

export class CreateQuizDto{
@IsNotEmpty({ message: 'The quiz should have a title' })
@Length(3,255)
title: string;


@IsNotEmpty()
@Length(3)
descripcion: string
}