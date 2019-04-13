import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { GraphQLResolveInfo, SelectionNode } from 'graphql';

@Injectable()
export class UserPasswordGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const executionContext = GqlExecutionContext.create(context);
    const info = executionContext.getInfo<GraphQLResolveInfo>();
    if (info) {
      const isPasswordFieldExisted = info.fieldNodes.some(fieldNode => this.isPasswordFieldExisted(fieldNode));
      if (isPasswordFieldExisted) {
        throw new UnauthorizedException(`You are not allowed to query the 'password' field`);
      }
    }
    return true;
  }

  private isPasswordFieldExisted(selectionNode: SelectionNode) {
    if (selectionNode.kind === 'Field' && selectionNode.name.value === 'password') return true;
    if (selectionNode.kind === 'FragmentSpread') return false;
    if (!selectionNode.selectionSet || !selectionNode.selectionSet.selections) return false;
    const { selections } = selectionNode.selectionSet;
    return selections.some(selection => this.isPasswordFieldExisted(selection));
  }
}
