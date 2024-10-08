// @ts-nocheck
import {
    type ClientOptions,
    createClient as createClientOriginal,
    type FieldsSelection,
    generateGraphqlOperation,
    type GraphqlOperation,
    linkTypeMap
} from '../runtime/index.js'
import type { Query, QueryGenqlSelection } from './schema.js'
import types from './types.js'

export type { FieldsSelection } from '../runtime/index.js'
export * from './schema.js'
const typeMap = linkTypeMap(types as any)

export interface Client {
    query<R extends QueryGenqlSelection>(
        request: R & { __name?: string }
    ): Promise<FieldsSelection<Query, R>>
}

export const createClient = function (options?: ClientOptions): Client {
    return createClientOriginal({
        url:
            globalThis?.window?.location?.hostname === 'localhost' ||
            globalThis?.window?.location?.hostname === '127.0.0.1'
                ? '/graphql/zworpshop'
                : globalThis?.window?.location?.hostname === 'localhost' ||
                    globalThis?.window?.location?.hostname === '127.0.0.1'
                  ? '/graphql/zworpshop'
                  : globalThis?.window?.location?.hostname === 'localhost' ||
                      globalThis?.window?.location?.hostname === '127.0.0.1'
                    ? '/graphql/zworpshop'
                    : globalThis?.window?.location?.hostname === 'localhost' ||
                        globalThis?.window?.location?.hostname === '127.0.0.1'
                      ? '/graphql/zworpshop'
                      : globalThis?.window?.location?.hostname ===
                              'localhost' ||
                          globalThis?.window?.location?.hostname === '127.0.0.1'
                        ? '/graphql/zworpshop'
                        : globalThis?.window?.location?.hostname ===
                                'localhost' ||
                            globalThis?.window?.location?.hostname ===
                                '127.0.0.1'
                          ? '/graphql/zworpshop'
                          : globalThis?.window?.location?.hostname ===
                                  'localhost' ||
                              globalThis?.window?.location?.hostname ===
                                  '127.0.0.1'
                            ? '/graphql/zworpshop'
                            : globalThis?.window?.location?.hostname ===
                                    'localhost' ||
                                globalThis?.window?.location?.hostname ===
                                    '127.0.0.1'
                              ? '/graphql/zworpshop'
                              : globalThis?.window?.location?.hostname ===
                                      'localhost' ||
                                  globalThis?.window?.location?.hostname ===
                                      '127.0.0.1'
                                ? '/graphql/zworpshop'
                                : globalThis?.window?.location?.hostname ===
                                        'localhost' ||
                                    globalThis?.window?.location?.hostname ===
                                        '127.0.0.1'
                                  ? '/graphql/zworpshop'
                                  : globalThis?.window?.location?.hostname ===
                                          'localhost' ||
                                      globalThis?.window?.location?.hostname ===
                                          '127.0.0.1'
                                    ? '/graphql/zworpshop'
                                    : globalThis?.window?.location?.hostname ===
                                            'localhost' ||
                                        globalThis?.window?.location
                                            ?.hostname === '127.0.0.1'
                                      ? '/graphql/zworpshop'
                                      : globalThis?.window?.location
                                              ?.hostname === 'localhost' ||
                                          globalThis?.window?.location
                                              ?.hostname === '127.0.0.1'
                                        ? '/graphql/zworpshop'
                                        : globalThis?.window?.location
                                                ?.hostname === 'localhost' ||
                                            globalThis?.window?.location
                                                ?.hostname === '127.0.0.1'
                                          ? '/graphql/zworpshop'
                                          : globalThis?.window?.location
                                                  ?.hostname === 'localhost' ||
                                              globalThis?.window?.location
                                                  ?.hostname === '127.0.0.1'
                                            ? '/graphql/zworpshop'
                                            : globalThis?.window?.location
                                                    ?.hostname ===
                                                    'localhost' ||
                                                globalThis?.window?.location
                                                    ?.hostname === '127.0.0.1'
                                              ? '/graphql/zworpshop'
                                              : globalThis?.window?.location
                                                      ?.hostname ===
                                                      'localhost' ||
                                                  globalThis?.window?.location
                                                      ?.hostname === '127.0.0.1'
                                                ? '/graphql/zworpshop'
                                                : globalThis?.window?.location
                                                        ?.hostname ===
                                                        'localhost' ||
                                                    globalThis?.window?.location
                                                        ?.hostname ===
                                                        '127.0.0.1'
                                                  ? '/graphql/zworpshop'
                                                  : globalThis?.window?.location
                                                          ?.hostname ===
                                                          'localhost' ||
                                                      globalThis?.window
                                                          ?.location
                                                          ?.hostname ===
                                                          '127.0.0.1'
                                                    ? '/graphql/zworpshop'
                                                    : globalThis?.window
                                                            ?.location
                                                            ?.hostname ===
                                                            'localhost' ||
                                                        globalThis?.window
                                                            ?.location
                                                            ?.hostname ===
                                                            '127.0.0.1'
                                                      ? '/graphql/zworpshop'
                                                      : globalThis?.window
                                                              ?.location
                                                              ?.hostname ===
                                                              'localhost' ||
                                                          globalThis?.window
                                                              ?.location
                                                              ?.hostname ===
                                                              '127.0.0.1'
                                                        ? '/graphql/zworpshop'
                                                        : globalThis?.window
                                                                ?.location
                                                                ?.hostname ===
                                                                'localhost' ||
                                                            globalThis?.window
                                                                ?.location
                                                                ?.hostname ===
                                                                '127.0.0.1'
                                                          ? '/graphql/zworpshop'
                                                          : globalThis?.window
                                                                  ?.location
                                                                  ?.hostname ===
                                                                  'localhost' ||
                                                              globalThis?.window
                                                                  ?.location
                                                                  ?.hostname ===
                                                                  '127.0.0.1'
                                                            ? '/graphql/zworpshop'
                                                            : globalThis?.window
                                                                    ?.location
                                                                    ?.hostname ===
                                                                    'localhost' ||
                                                                globalThis
                                                                    ?.window
                                                                    ?.location
                                                                    ?.hostname ===
                                                                    '127.0.0.1'
                                                              ? '/graphql/zworpshop'
                                                              : globalThis
                                                                      ?.window
                                                                      ?.location
                                                                      ?.hostname ===
                                                                      'localhost' ||
                                                                  globalThis
                                                                      ?.window
                                                                      ?.location
                                                                      ?.hostname ===
                                                                      '127.0.0.1'
                                                                ? '/graphql/zworpshop'
                                                                : globalThis
                                                                        ?.window
                                                                        ?.location
                                                                        ?.hostname ===
                                                                        'localhost' ||
                                                                    globalThis
                                                                        ?.window
                                                                        ?.location
                                                                        ?.hostname ===
                                                                        '127.0.0.1'
                                                                  ? '/graphql/zworpshop'
                                                                  : globalThis
                                                                          ?.window
                                                                          ?.location
                                                                          ?.hostname ===
                                                                          'localhost' ||
                                                                      globalThis
                                                                          ?.window
                                                                          ?.location
                                                                          ?.hostname ===
                                                                          '127.0.0.1'
                                                                    ? '/graphql/zworpshop'
                                                                    : globalThis
                                                                            ?.window
                                                                            ?.location
                                                                            ?.hostname ===
                                                                            'localhost' ||
                                                                        globalThis
                                                                            ?.window
                                                                            ?.location
                                                                            ?.hostname ===
                                                                            '127.0.0.1'
                                                                      ? '/graphql/zworpshop'
                                                                      : globalThis
                                                                              ?.window
                                                                              ?.location
                                                                              ?.hostname ===
                                                                              'localhost' ||
                                                                          globalThis
                                                                              ?.window
                                                                              ?.location
                                                                              ?.hostname ===
                                                                              '127.0.0.1'
                                                                        ? '/graphql/zworpshop'
                                                                        : globalThis
                                                                                ?.window
                                                                                ?.location
                                                                                ?.hostname ===
                                                                                'localhost' ||
                                                                            globalThis
                                                                                ?.window
                                                                                ?.location
                                                                                ?.hostname ===
                                                                                '127.0.0.1'
                                                                          ? '/graphql/zworpshop'
                                                                          : globalThis
                                                                                  ?.window
                                                                                  ?.location
                                                                                  ?.hostname ===
                                                                                  'localhost' ||
                                                                              globalThis
                                                                                  ?.window
                                                                                  ?.location
                                                                                  ?.hostname ===
                                                                                  '127.0.0.1'
                                                                            ? '/graphql/zworpshop'
                                                                            : globalThis
                                                                                    ?.window
                                                                                    ?.location
                                                                                    ?.hostname ===
                                                                                    'localhost' ||
                                                                                globalThis
                                                                                    ?.window
                                                                                    ?.location
                                                                                    ?.hostname ===
                                                                                    '127.0.0.1'
                                                                              ? '/graphql/zworpshop'
                                                                              : globalThis
                                                                                      ?.window
                                                                                      ?.location
                                                                                      ?.hostname ===
                                                                                      'localhost' ||
                                                                                  globalThis
                                                                                      ?.window
                                                                                      ?.location
                                                                                      ?.hostname ===
                                                                                      '127.0.0.1'
                                                                                ? '/graphql/zworpshop'
                                                                                : globalThis
                                                                                        ?.window
                                                                                        ?.location
                                                                                        ?.hostname ===
                                                                                        'localhost' ||
                                                                                    globalThis
                                                                                        ?.window
                                                                                        ?.location
                                                                                        ?.hostname ===
                                                                                        '127.0.0.1'
                                                                                  ? '/graphql/zworpshop'
                                                                                  : globalThis
                                                                                          ?.window
                                                                                          ?.location
                                                                                          ?.hostname ===
                                                                                          'localhost' ||
                                                                                      globalThis
                                                                                          ?.window
                                                                                          ?.location
                                                                                          ?.hostname ===
                                                                                          '127.0.0.1'
                                                                                    ? '/graphql/zworpshop'
                                                                                    : globalThis
                                                                                            ?.window
                                                                                            ?.location
                                                                                            ?.hostname ===
                                                                                            'localhost' ||
                                                                                        globalThis
                                                                                            ?.window
                                                                                            ?.location
                                                                                            ?.hostname ===
                                                                                            '127.0.0.1'
                                                                                      ? '/graphql/zworpshop'
                                                                                      : globalThis
                                                                                              ?.window
                                                                                              ?.location
                                                                                              ?.hostname ===
                                                                                              'localhost' ||
                                                                                          globalThis
                                                                                              ?.window
                                                                                              ?.location
                                                                                              ?.hostname ===
                                                                                              '127.0.0.1'
                                                                                        ? '/graphql/zworpshop'
                                                                                        : globalThis
                                                                                                ?.window
                                                                                                ?.location
                                                                                                ?.hostname ===
                                                                                                'localhost' ||
                                                                                            globalThis
                                                                                                ?.window
                                                                                                ?.location
                                                                                                ?.hostname ===
                                                                                                '127.0.0.1'
                                                                                          ? '/graphql/zworpshop'
                                                                                          : globalThis
                                                                                                  ?.window
                                                                                                  ?.location
                                                                                                  ?.hostname ===
                                                                                                  'localhost' ||
                                                                                              globalThis
                                                                                                  ?.window
                                                                                                  ?.location
                                                                                                  ?.hostname ===
                                                                                                  '127.0.0.1'
                                                                                            ? '/graphql/zworpshop'
                                                                                            : globalThis
                                                                                                    ?.window
                                                                                                    ?.location
                                                                                                    ?.hostname ===
                                                                                                    'localhost' ||
                                                                                                globalThis
                                                                                                    ?.window
                                                                                                    ?.location
                                                                                                    ?.hostname ===
                                                                                                    '127.0.0.1'
                                                                                              ? '/graphql/zworpshop'
                                                                                              : globalThis
                                                                                                      ?.window
                                                                                                      ?.location
                                                                                                      ?.hostname ===
                                                                                                      'localhost' ||
                                                                                                  globalThis
                                                                                                      ?.window
                                                                                                      ?.location
                                                                                                      ?.hostname ===
                                                                                                      '127.0.0.1'
                                                                                                ? '/graphql/zworpshop'
                                                                                                : globalThis
                                                                                                        ?.window
                                                                                                        ?.location
                                                                                                        ?.hostname ===
                                                                                                        'localhost' ||
                                                                                                    globalThis
                                                                                                        ?.window
                                                                                                        ?.location
                                                                                                        ?.hostname ===
                                                                                                        '127.0.0.1'
                                                                                                  ? '/graphql/zworpshop'
                                                                                                  : globalThis
                                                                                                          ?.window
                                                                                                          ?.location
                                                                                                          ?.hostname ===
                                                                                                          'localhost' ||
                                                                                                      globalThis
                                                                                                          ?.window
                                                                                                          ?.location
                                                                                                          ?.hostname ===
                                                                                                          '127.0.0.1'
                                                                                                    ? '/graphql/zworpshop'
                                                                                                    : globalThis
                                                                                                            ?.window
                                                                                                            ?.location
                                                                                                            ?.hostname ===
                                                                                                            'localhost' ||
                                                                                                        globalThis
                                                                                                            ?.window
                                                                                                            ?.location
                                                                                                            ?.hostname ===
                                                                                                            '127.0.0.1'
                                                                                                      ? '/graphql/zworpshop'
                                                                                                      : globalThis
                                                                                                              ?.window
                                                                                                              ?.location
                                                                                                              ?.hostname ===
                                                                                                              'localhost' ||
                                                                                                          globalThis
                                                                                                              ?.window
                                                                                                              ?.location
                                                                                                              ?.hostname ===
                                                                                                              '127.0.0.1'
                                                                                                        ? '/graphql/zworpshop'
                                                                                                        : globalThis
                                                                                                                ?.window
                                                                                                                ?.location
                                                                                                                ?.hostname ===
                                                                                                                'localhost' ||
                                                                                                            globalThis
                                                                                                                ?.window
                                                                                                                ?.location
                                                                                                                ?.hostname ===
                                                                                                                '127.0.0.1'
                                                                                                          ? '/graphql/zworpshop'
                                                                                                          : globalThis
                                                                                                                  ?.window
                                                                                                                  ?.location
                                                                                                                  ?.hostname ===
                                                                                                                  'localhost' ||
                                                                                                              globalThis
                                                                                                                  ?.window
                                                                                                                  ?.location
                                                                                                                  ?.hostname ===
                                                                                                                  '127.0.0.1'
                                                                                                            ? '/graphql/zworpshop'
                                                                                                            : globalThis
                                                                                                                    ?.window
                                                                                                                    ?.location
                                                                                                                    ?.hostname ===
                                                                                                                    'localhost' ||
                                                                                                                globalThis
                                                                                                                    ?.window
                                                                                                                    ?.location
                                                                                                                    ?.hostname ===
                                                                                                                    '127.0.0.1'
                                                                                                              ? '/graphql/zworpshop'
                                                                                                              : globalThis
                                                                                                                      ?.window
                                                                                                                      ?.location
                                                                                                                      ?.hostname ===
                                                                                                                      'localhost' ||
                                                                                                                  globalThis
                                                                                                                      ?.window
                                                                                                                      ?.location
                                                                                                                      ?.hostname ===
                                                                                                                      '127.0.0.1'
                                                                                                                ? '/graphql/zworpshop'
                                                                                                                : globalThis
                                                                                                                        ?.window
                                                                                                                        ?.location
                                                                                                                        ?.hostname ===
                                                                                                                        'localhost' ||
                                                                                                                    globalThis
                                                                                                                        ?.window
                                                                                                                        ?.location
                                                                                                                        ?.hostname ===
                                                                                                                        '127.0.0.1'
                                                                                                                  ? '/graphql/zworpshop'
                                                                                                                  : globalThis
                                                                                                                          ?.window
                                                                                                                          ?.location
                                                                                                                          ?.hostname ===
                                                                                                                          'localhost' ||
                                                                                                                      globalThis
                                                                                                                          ?.window
                                                                                                                          ?.location
                                                                                                                          ?.hostname ===
                                                                                                                          '127.0.0.1'
                                                                                                                    ? '/graphql/zworpshop'
                                                                                                                    : globalThis
                                                                                                                            ?.window
                                                                                                                            ?.location
                                                                                                                            ?.hostname ===
                                                                                                                            'localhost' ||
                                                                                                                        globalThis
                                                                                                                            ?.window
                                                                                                                            ?.location
                                                                                                                            ?.hostname ===
                                                                                                                            '127.0.0.1'
                                                                                                                      ? '/graphql/zworpshop'
                                                                                                                      : globalThis
                                                                                                                              ?.window
                                                                                                                              ?.location
                                                                                                                              ?.hostname ===
                                                                                                                              'localhost' ||
                                                                                                                          globalThis
                                                                                                                              ?.window
                                                                                                                              ?.location
                                                                                                                              ?.hostname ===
                                                                                                                              '127.0.0.1'
                                                                                                                        ? '/graphql/zworpshop'
                                                                                                                        : globalThis
                                                                                                                                ?.window
                                                                                                                                ?.location
                                                                                                                                ?.hostname ===
                                                                                                                                'localhost' ||
                                                                                                                            globalThis
                                                                                                                                ?.window
                                                                                                                                ?.location
                                                                                                                                ?.hostname ===
                                                                                                                                '127.0.0.1'
                                                                                                                          ? '/graphql/zworpshop'
                                                                                                                          : globalThis
                                                                                                                                  ?.window
                                                                                                                                  ?.location
                                                                                                                                  ?.hostname ===
                                                                                                                                  'localhost' ||
                                                                                                                              globalThis
                                                                                                                                  ?.window
                                                                                                                                  ?.location
                                                                                                                                  ?.hostname ===
                                                                                                                                  '127.0.0.1'
                                                                                                                            ? '/graphql/zworpshop'
                                                                                                                            : globalThis
                                                                                                                                    ?.window
                                                                                                                                    ?.location
                                                                                                                                    ?.hostname ===
                                                                                                                                    'localhost' ||
                                                                                                                                globalThis
                                                                                                                                    ?.window
                                                                                                                                    ?.location
                                                                                                                                    ?.hostname ===
                                                                                                                                    '127.0.0.1'
                                                                                                                              ? '/graphql/zworpshop'
                                                                                                                              : globalThis
                                                                                                                                      ?.window
                                                                                                                                      ?.location
                                                                                                                                      ?.hostname ===
                                                                                                                                      'localhost' ||
                                                                                                                                  globalThis
                                                                                                                                      ?.window
                                                                                                                                      ?.location
                                                                                                                                      ?.hostname ===
                                                                                                                                      '127.0.0.1'
                                                                                                                                ? '/graphql/zworpshop'
                                                                                                                                : globalThis
                                                                                                                                        ?.window
                                                                                                                                        ?.location
                                                                                                                                        ?.hostname ===
                                                                                                                                        'localhost' ||
                                                                                                                                    globalThis
                                                                                                                                        ?.window
                                                                                                                                        ?.location
                                                                                                                                        ?.hostname ===
                                                                                                                                        '127.0.0.1'
                                                                                                                                  ? '/graphql/zworpshop'
                                                                                                                                  : globalThis
                                                                                                                                          ?.window
                                                                                                                                          ?.location
                                                                                                                                          ?.hostname ===
                                                                                                                                          'localhost' ||
                                                                                                                                      globalThis
                                                                                                                                          ?.window
                                                                                                                                          ?.location
                                                                                                                                          ?.hostname ===
                                                                                                                                          '127.0.0.1'
                                                                                                                                    ? '/graphql/zworpshop'
                                                                                                                                    : globalThis
                                                                                                                                            ?.window
                                                                                                                                            ?.location
                                                                                                                                            ?.hostname ===
                                                                                                                                            'localhost' ||
                                                                                                                                        globalThis
                                                                                                                                            ?.window
                                                                                                                                            ?.location
                                                                                                                                            ?.hostname ===
                                                                                                                                            '127.0.0.1'
                                                                                                                                      ? '/graphql/zworpshop'
                                                                                                                                      : globalThis
                                                                                                                                              ?.window
                                                                                                                                              ?.location
                                                                                                                                              ?.hostname ===
                                                                                                                                              'localhost' ||
                                                                                                                                          globalThis
                                                                                                                                              ?.window
                                                                                                                                              ?.location
                                                                                                                                              ?.hostname ===
                                                                                                                                              '127.0.0.1'
                                                                                                                                        ? '/graphql/zworpshop'
                                                                                                                                        : globalThis
                                                                                                                                                ?.window
                                                                                                                                                ?.location
                                                                                                                                                ?.hostname ===
                                                                                                                                                'localhost' ||
                                                                                                                                            globalThis
                                                                                                                                                ?.window
                                                                                                                                                ?.location
                                                                                                                                                ?.hostname ===
                                                                                                                                                '127.0.0.1'
                                                                                                                                          ? '/graphql/zworpshop'
                                                                                                                                          : globalThis
                                                                                                                                                  ?.window
                                                                                                                                                  ?.location
                                                                                                                                                  ?.hostname ===
                                                                                                                                                  'localhost' ||
                                                                                                                                              globalThis
                                                                                                                                                  ?.window
                                                                                                                                                  ?.location
                                                                                                                                                  ?.hostname ===
                                                                                                                                                  '127.0.0.1'
                                                                                                                                            ? '/graphql/zworpshop'
                                                                                                                                            : globalThis
                                                                                                                                                    ?.window
                                                                                                                                                    ?.location
                                                                                                                                                    ?.hostname ===
                                                                                                                                                    'localhost' ||
                                                                                                                                                globalThis
                                                                                                                                                    ?.window
                                                                                                                                                    ?.location
                                                                                                                                                    ?.hostname ===
                                                                                                                                                    '127.0.0.1'
                                                                                                                                              ? '/graphql/zworpshop'
                                                                                                                                              : globalThis
                                                                                                                                                      ?.window
                                                                                                                                                      ?.location
                                                                                                                                                      ?.hostname ===
                                                                                                                                                      'localhost' ||
                                                                                                                                                  globalThis
                                                                                                                                                      ?.window
                                                                                                                                                      ?.location
                                                                                                                                                      ?.hostname ===
                                                                                                                                                      '127.0.0.1'
                                                                                                                                                ? '/graphql/zworpshop'
                                                                                                                                                : globalThis
                                                                                                                                                        ?.window
                                                                                                                                                        ?.location
                                                                                                                                                        ?.hostname ===
                                                                                                                                                        'localhost' ||
                                                                                                                                                    globalThis
                                                                                                                                                        ?.window
                                                                                                                                                        ?.location
                                                                                                                                                        ?.hostname ===
                                                                                                                                                        '127.0.0.1'
                                                                                                                                                  ? '/graphql/zworpshop'
                                                                                                                                                  : globalThis
                                                                                                                                                          ?.window
                                                                                                                                                          ?.location
                                                                                                                                                          ?.hostname ===
                                                                                                                                                          'localhost' ||
                                                                                                                                                      globalThis
                                                                                                                                                          ?.window
                                                                                                                                                          ?.location
                                                                                                                                                          ?.hostname ===
                                                                                                                                                          '127.0.0.1'
                                                                                                                                                    ? '/graphql/zworpshop'
                                                                                                                                                    : globalThis
                                                                                                                                                            ?.window
                                                                                                                                                            ?.location
                                                                                                                                                            ?.hostname ===
                                                                                                                                                            'localhost' ||
                                                                                                                                                        globalThis
                                                                                                                                                            ?.window
                                                                                                                                                            ?.location
                                                                                                                                                            ?.hostname ===
                                                                                                                                                            '127.0.0.1'
                                                                                                                                                      ? '/graphql/zworpshop'
                                                                                                                                                      : globalThis
                                                                                                                                                              ?.window
                                                                                                                                                              ?.location
                                                                                                                                                              ?.hostname ===
                                                                                                                                                              'localhost' ||
                                                                                                                                                          globalThis
                                                                                                                                                              ?.window
                                                                                                                                                              ?.location
                                                                                                                                                              ?.hostname ===
                                                                                                                                                              '127.0.0.1'
                                                                                                                                                        ? '/graphql/zworpshop'
                                                                                                                                                        : globalThis
                                                                                                                                                                ?.window
                                                                                                                                                                ?.location
                                                                                                                                                                ?.hostname ===
                                                                                                                                                                'localhost' ||
                                                                                                                                                            globalThis
                                                                                                                                                                ?.window
                                                                                                                                                                ?.location
                                                                                                                                                                ?.hostname ===
                                                                                                                                                                '127.0.0.1'
                                                                                                                                                          ? '/graphql/zworpshop'
                                                                                                                                                          : globalThis
                                                                                                                                                                  ?.window
                                                                                                                                                                  ?.location
                                                                                                                                                                  ?.hostname ===
                                                                                                                                                                  'localhost' ||
                                                                                                                                                              globalThis
                                                                                                                                                                  ?.window
                                                                                                                                                                  ?.location
                                                                                                                                                                  ?.hostname ===
                                                                                                                                                                  '127.0.0.1'
                                                                                                                                                            ? '/graphql/zworpshop'
                                                                                                                                                            : globalThis
                                                                                                                                                                    ?.window
                                                                                                                                                                    ?.location
                                                                                                                                                                    ?.hostname ===
                                                                                                                                                                    'localhost' ||
                                                                                                                                                                globalThis
                                                                                                                                                                    ?.window
                                                                                                                                                                    ?.location
                                                                                                                                                                    ?.hostname ===
                                                                                                                                                                    '127.0.0.1'
                                                                                                                                                              ? '/graphql/zworpshop'
                                                                                                                                                              : globalThis
                                                                                                                                                                      ?.window
                                                                                                                                                                      ?.location
                                                                                                                                                                      ?.hostname ===
                                                                                                                                                                      'localhost' ||
                                                                                                                                                                  globalThis
                                                                                                                                                                      ?.window
                                                                                                                                                                      ?.location
                                                                                                                                                                      ?.hostname ===
                                                                                                                                                                      '127.0.0.1'
                                                                                                                                                                ? '/graphql/zworpshop'
                                                                                                                                                                : globalThis
                                                                                                                                                                        ?.window
                                                                                                                                                                        ?.location
                                                                                                                                                                        ?.hostname ===
                                                                                                                                                                        'localhost' ||
                                                                                                                                                                    globalThis
                                                                                                                                                                        ?.window
                                                                                                                                                                        ?.location
                                                                                                                                                                        ?.hostname ===
                                                                                                                                                                        '127.0.0.1'
                                                                                                                                                                  ? '/graphql/zworpshop'
                                                                                                                                                                  : globalThis
                                                                                                                                                                          ?.window
                                                                                                                                                                          ?.location
                                                                                                                                                                          ?.hostname ===
                                                                                                                                                                          'localhost' ||
                                                                                                                                                                      globalThis
                                                                                                                                                                          ?.window
                                                                                                                                                                          ?.location
                                                                                                                                                                          ?.hostname ===
                                                                                                                                                                          '127.0.0.1'
                                                                                                                                                                    ? '/graphql/zworpshop'
                                                                                                                                                                    : globalThis
                                                                                                                                                                            ?.window
                                                                                                                                                                            ?.location
                                                                                                                                                                            ?.hostname ===
                                                                                                                                                                            'localhost' ||
                                                                                                                                                                        globalThis
                                                                                                                                                                            ?.window
                                                                                                                                                                            ?.location
                                                                                                                                                                            ?.hostname ===
                                                                                                                                                                            '127.0.0.1'
                                                                                                                                                                      ? '/graphql/zworpshop'
                                                                                                                                                                      : globalThis
                                                                                                                                                                              ?.window
                                                                                                                                                                              ?.location
                                                                                                                                                                              ?.hostname ===
                                                                                                                                                                              'localhost' ||
                                                                                                                                                                          globalThis
                                                                                                                                                                              ?.window
                                                                                                                                                                              ?.location
                                                                                                                                                                              ?.hostname ===
                                                                                                                                                                              '127.0.0.1'
                                                                                                                                                                        ? '/graphql/zworpshop'
                                                                                                                                                                        : globalThis
                                                                                                                                                                                ?.window
                                                                                                                                                                                ?.location
                                                                                                                                                                                ?.hostname ===
                                                                                                                                                                                'localhost' ||
                                                                                                                                                                            globalThis
                                                                                                                                                                                ?.window
                                                                                                                                                                                ?.location
                                                                                                                                                                                ?.hostname ===
                                                                                                                                                                                '127.0.0.1'
                                                                                                                                                                          ? '/graphql/zworpshop'
                                                                                                                                                                          : globalThis
                                                                                                                                                                                  ?.window
                                                                                                                                                                                  ?.location
                                                                                                                                                                                  ?.hostname ===
                                                                                                                                                                                  'localhost' ||
                                                                                                                                                                              globalThis
                                                                                                                                                                                  ?.window
                                                                                                                                                                                  ?.location
                                                                                                                                                                                  ?.hostname ===
                                                                                                                                                                                  '127.0.0.1'
                                                                                                                                                                            ? '/graphql/zworpshop'
                                                                                                                                                                            : globalThis
                                                                                                                                                                                    ?.window
                                                                                                                                                                                    ?.location
                                                                                                                                                                                    ?.hostname ===
                                                                                                                                                                                    'localhost' ||
                                                                                                                                                                                globalThis
                                                                                                                                                                                    ?.window
                                                                                                                                                                                    ?.location
                                                                                                                                                                                    ?.hostname ===
                                                                                                                                                                                    '127.0.0.1'
                                                                                                                                                                              ? '/graphql/zworpshop'
                                                                                                                                                                              : globalThis
                                                                                                                                                                                      ?.window
                                                                                                                                                                                      ?.location
                                                                                                                                                                                      ?.hostname ===
                                                                                                                                                                                      'localhost' ||
                                                                                                                                                                                  globalThis
                                                                                                                                                                                      ?.window
                                                                                                                                                                                      ?.location
                                                                                                                                                                                      ?.hostname ===
                                                                                                                                                                                      '127.0.0.1'
                                                                                                                                                                                ? '/graphql/zworpshop'
                                                                                                                                                                                : globalThis
                                                                                                                                                                                        ?.window
                                                                                                                                                                                        ?.location
                                                                                                                                                                                        ?.hostname ===
                                                                                                                                                                                        'localhost' ||
                                                                                                                                                                                    globalThis
                                                                                                                                                                                        ?.window
                                                                                                                                                                                        ?.location
                                                                                                                                                                                        ?.hostname ===
                                                                                                                                                                                        '127.0.0.1'
                                                                                                                                                                                  ? '/graphql/zworpshop'
                                                                                                                                                                                  : globalThis
                                                                                                                                                                                          ?.window
                                                                                                                                                                                          ?.location
                                                                                                                                                                                          ?.hostname ===
                                                                                                                                                                                          'localhost' ||
                                                                                                                                                                                      globalThis
                                                                                                                                                                                          ?.window
                                                                                                                                                                                          ?.location
                                                                                                                                                                                          ?.hostname ===
                                                                                                                                                                                          '127.0.0.1'
                                                                                                                                                                                    ? '/graphql/zworpshop'
                                                                                                                                                                                    : globalThis
                                                                                                                                                                                            ?.window
                                                                                                                                                                                            ?.location
                                                                                                                                                                                            ?.hostname ===
                                                                                                                                                                                            'localhost' ||
                                                                                                                                                                                        globalThis
                                                                                                                                                                                            ?.window
                                                                                                                                                                                            ?.location
                                                                                                                                                                                            ?.hostname ===
                                                                                                                                                                                            '127.0.0.1'
                                                                                                                                                                                      ? '/graphql/zworpshop'
                                                                                                                                                                                      : globalThis
                                                                                                                                                                                              ?.window
                                                                                                                                                                                              ?.location
                                                                                                                                                                                              ?.hostname ===
                                                                                                                                                                                              'localhost' ||
                                                                                                                                                                                          globalThis
                                                                                                                                                                                              ?.window
                                                                                                                                                                                              ?.location
                                                                                                                                                                                              ?.hostname ===
                                                                                                                                                                                              '127.0.0.1'
                                                                                                                                                                                        ? '/graphql/zworpshop'
                                                                                                                                                                                        : globalThis
                                                                                                                                                                                                ?.window
                                                                                                                                                                                                ?.location
                                                                                                                                                                                                ?.hostname ===
                                                                                                                                                                                                'localhost' ||
                                                                                                                                                                                            globalThis
                                                                                                                                                                                                ?.window
                                                                                                                                                                                                ?.location
                                                                                                                                                                                                ?.hostname ===
                                                                                                                                                                                                '127.0.0.1'
                                                                                                                                                                                          ? '/graphql/zworpshop'
                                                                                                                                                                                          : globalThis
                                                                                                                                                                                                  ?.window
                                                                                                                                                                                                  ?.location
                                                                                                                                                                                                  ?.hostname ===
                                                                                                                                                                                                  'localhost' ||
                                                                                                                                                                                              globalThis
                                                                                                                                                                                                  ?.window
                                                                                                                                                                                                  ?.location
                                                                                                                                                                                                  ?.hostname ===
                                                                                                                                                                                                  '127.0.0.1'
                                                                                                                                                                                            ? '/graphql/zworpshop'
                                                                                                                                                                                            : globalThis
                                                                                                                                                                                                    ?.window
                                                                                                                                                                                                    ?.location
                                                                                                                                                                                                    ?.hostname ===
                                                                                                                                                                                                    'localhost' ||
                                                                                                                                                                                                globalThis
                                                                                                                                                                                                    ?.window
                                                                                                                                                                                                    ?.location
                                                                                                                                                                                                    ?.hostname ===
                                                                                                                                                                                                    '127.0.0.1'
                                                                                                                                                                                              ? '/graphql/zworpshop'
                                                                                                                                                                                              : globalThis
                                                                                                                                                                                                      ?.window
                                                                                                                                                                                                      ?.location
                                                                                                                                                                                                      ?.hostname ===
                                                                                                                                                                                                      'localhost' ||
                                                                                                                                                                                                  globalThis
                                                                                                                                                                                                      ?.window
                                                                                                                                                                                                      ?.location
                                                                                                                                                                                                      ?.hostname ===
                                                                                                                                                                                                      '127.0.0.1'
                                                                                                                                                                                                ? '/graphql/zworpshop'
                                                                                                                                                                                                : globalThis
                                                                                                                                                                                                        ?.window
                                                                                                                                                                                                        ?.location
                                                                                                                                                                                                        ?.hostname ===
                                                                                                                                                                                                        'localhost' ||
                                                                                                                                                                                                    globalThis
                                                                                                                                                                                                        ?.window
                                                                                                                                                                                                        ?.location
                                                                                                                                                                                                        ?.hostname ===
                                                                                                                                                                                                        '127.0.0.1'
                                                                                                                                                                                                  ? '/graphql/zworpshop'
                                                                                                                                                                                                  : globalThis
                                                                                                                                                                                                          ?.window
                                                                                                                                                                                                          ?.location
                                                                                                                                                                                                          ?.hostname ===
                                                                                                                                                                                                          'localhost' ||
                                                                                                                                                                                                      globalThis
                                                                                                                                                                                                          ?.window
                                                                                                                                                                                                          ?.location
                                                                                                                                                                                                          ?.hostname ===
                                                                                                                                                                                                          '127.0.0.1'
                                                                                                                                                                                                    ? '/graphql/zworpshop'
                                                                                                                                                                                                    : globalThis
                                                                                                                                                                                                            ?.window
                                                                                                                                                                                                            ?.location
                                                                                                                                                                                                            ?.hostname ===
                                                                                                                                                                                                            'localhost' ||
                                                                                                                                                                                                        globalThis
                                                                                                                                                                                                            ?.window
                                                                                                                                                                                                            ?.location
                                                                                                                                                                                                            ?.hostname ===
                                                                                                                                                                                                            '127.0.0.1'
                                                                                                                                                                                                      ? '/graphql/zworpshop'
                                                                                                                                                                                                      : globalThis
                                                                                                                                                                                                              ?.window
                                                                                                                                                                                                              ?.location
                                                                                                                                                                                                              ?.hostname ===
                                                                                                                                                                                                              'localhost' ||
                                                                                                                                                                                                          globalThis
                                                                                                                                                                                                              ?.window
                                                                                                                                                                                                              ?.location
                                                                                                                                                                                                              ?.hostname ===
                                                                                                                                                                                                              '127.0.0.1'
                                                                                                                                                                                                        ? '/graphql/zworpshop'
                                                                                                                                                                                                        : globalThis
                                                                                                                                                                                                                ?.window
                                                                                                                                                                                                                ?.location
                                                                                                                                                                                                                ?.hostname ===
                                                                                                                                                                                                                'localhost' ||
                                                                                                                                                                                                            globalThis
                                                                                                                                                                                                                ?.window
                                                                                                                                                                                                                ?.location
                                                                                                                                                                                                                ?.hostname ===
                                                                                                                                                                                                                '127.0.0.1'
                                                                                                                                                                                                          ? '/graphql/zworpshop'
                                                                                                                                                                                                          : globalThis
                                                                                                                                                                                                                  ?.window
                                                                                                                                                                                                                  ?.location
                                                                                                                                                                                                                  ?.hostname ===
                                                                                                                                                                                                                  'localhost' ||
                                                                                                                                                                                                              globalThis
                                                                                                                                                                                                                  ?.window
                                                                                                                                                                                                                  ?.location
                                                                                                                                                                                                                  ?.hostname ===
                                                                                                                                                                                                                  '127.0.0.1'
                                                                                                                                                                                                            ? '/graphql/zworpshop'
                                                                                                                                                                                                            : globalThis
                                                                                                                                                                                                                    ?.window
                                                                                                                                                                                                                    ?.location
                                                                                                                                                                                                                    ?.hostname ===
                                                                                                                                                                                                                    'localhost' ||
                                                                                                                                                                                                                globalThis
                                                                                                                                                                                                                    ?.window
                                                                                                                                                                                                                    ?.location
                                                                                                                                                                                                                    ?.hostname ===
                                                                                                                                                                                                                    '127.0.0.1'
                                                                                                                                                                                                              ? '/graphql/zworpshop'
                                                                                                                                                                                                              : globalThis
                                                                                                                                                                                                                      ?.window
                                                                                                                                                                                                                      ?.location
                                                                                                                                                                                                                      ?.hostname ===
                                                                                                                                                                                                                      'localhost' ||
                                                                                                                                                                                                                  globalThis
                                                                                                                                                                                                                      ?.window
                                                                                                                                                                                                                      ?.location
                                                                                                                                                                                                                      ?.hostname ===
                                                                                                                                                                                                                      '127.0.0.1'
                                                                                                                                                                                                                ? '/graphql/zworpshop'
                                                                                                                                                                                                                : globalThis
                                                                                                                                                                                                                        ?.window
                                                                                                                                                                                                                        ?.location
                                                                                                                                                                                                                        ?.hostname ===
                                                                                                                                                                                                                        'localhost' ||
                                                                                                                                                                                                                    globalThis
                                                                                                                                                                                                                        ?.window
                                                                                                                                                                                                                        ?.location
                                                                                                                                                                                                                        ?.hostname ===
                                                                                                                                                                                                                        '127.0.0.1'
                                                                                                                                                                                                                  ? '/graphql/zworpshop'
                                                                                                                                                                                                                  : globalThis
                                                                                                                                                                                                                          ?.window
                                                                                                                                                                                                                          ?.location
                                                                                                                                                                                                                          ?.hostname ===
                                                                                                                                                                                                                          'localhost' ||
                                                                                                                                                                                                                      globalThis
                                                                                                                                                                                                                          ?.window
                                                                                                                                                                                                                          ?.location
                                                                                                                                                                                                                          ?.hostname ===
                                                                                                                                                                                                                          '127.0.0.1'
                                                                                                                                                                                                                    ? '/graphql/zworpshop'
                                                                                                                                                                                                                    : globalThis
                                                                                                                                                                                                                            ?.window
                                                                                                                                                                                                                            ?.location
                                                                                                                                                                                                                            ?.hostname ===
                                                                                                                                                                                                                            'localhost' ||
                                                                                                                                                                                                                        globalThis
                                                                                                                                                                                                                            ?.window
                                                                                                                                                                                                                            ?.location
                                                                                                                                                                                                                            ?.hostname ===
                                                                                                                                                                                                                            '127.0.0.1'
                                                                                                                                                                                                                      ? '/graphql/zworpshop'
                                                                                                                                                                                                                      : globalThis
                                                                                                                                                                                                                              ?.window
                                                                                                                                                                                                                              ?.location
                                                                                                                                                                                                                              ?.hostname ===
                                                                                                                                                                                                                              'localhost' ||
                                                                                                                                                                                                                          globalThis
                                                                                                                                                                                                                              ?.window
                                                                                                                                                                                                                              ?.location
                                                                                                                                                                                                                              ?.hostname ===
                                                                                                                                                                                                                              '127.0.0.1'
                                                                                                                                                                                                                        ? '/graphql/zworpshop'
                                                                                                                                                                                                                        : globalThis
                                                                                                                                                                                                                                ?.window
                                                                                                                                                                                                                                ?.location
                                                                                                                                                                                                                                ?.hostname ===
                                                                                                                                                                                                                                'localhost' ||
                                                                                                                                                                                                                            globalThis
                                                                                                                                                                                                                                ?.window
                                                                                                                                                                                                                                ?.location
                                                                                                                                                                                                                                ?.hostname ===
                                                                                                                                                                                                                                '127.0.0.1'
                                                                                                                                                                                                                          ? '/graphql/zworpshop'
                                                                                                                                                                                                                          : globalThis
                                                                                                                                                                                                                                  ?.window
                                                                                                                                                                                                                                  ?.location
                                                                                                                                                                                                                                  ?.hostname ===
                                                                                                                                                                                                                                  'localhost' ||
                                                                                                                                                                                                                              globalThis
                                                                                                                                                                                                                                  ?.window
                                                                                                                                                                                                                                  ?.location
                                                                                                                                                                                                                                  ?.hostname ===
                                                                                                                                                                                                                                  '127.0.0.1'
                                                                                                                                                                                                                            ? '/graphql/zworpshop'
                                                                                                                                                                                                                            : globalThis
                                                                                                                                                                                                                                    ?.window
                                                                                                                                                                                                                                    ?.location
                                                                                                                                                                                                                                    ?.hostname ===
                                                                                                                                                                                                                                    'localhost' ||
                                                                                                                                                                                                                                globalThis
                                                                                                                                                                                                                                    ?.window
                                                                                                                                                                                                                                    ?.location
                                                                                                                                                                                                                                    ?.hostname ===
                                                                                                                                                                                                                                    '127.0.0.1'
                                                                                                                                                                                                                              ? '/graphql/zworpshop'
                                                                                                                                                                                                                              : globalThis
                                                                                                                                                                                                                                      ?.window
                                                                                                                                                                                                                                      ?.location
                                                                                                                                                                                                                                      ?.hostname ===
                                                                                                                                                                                                                                      'localhost' ||
                                                                                                                                                                                                                                  globalThis
                                                                                                                                                                                                                                      ?.window
                                                                                                                                                                                                                                      ?.location
                                                                                                                                                                                                                                      ?.hostname ===
                                                                                                                                                                                                                                      '127.0.0.1'
                                                                                                                                                                                                                                ? '/graphql/zworpshop'
                                                                                                                                                                                                                                : globalThis
                                                                                                                                                                                                                                        ?.window
                                                                                                                                                                                                                                        ?.location
                                                                                                                                                                                                                                        ?.hostname ===
                                                                                                                                                                                                                                        'localhost' ||
                                                                                                                                                                                                                                    globalThis
                                                                                                                                                                                                                                        ?.window
                                                                                                                                                                                                                                        ?.location
                                                                                                                                                                                                                                        ?.hostname ===
                                                                                                                                                                                                                                        '127.0.0.1'
                                                                                                                                                                                                                                  ? '/graphql/zworpshop'
                                                                                                                                                                                                                                  : globalThis
                                                                                                                                                                                                                                          ?.window
                                                                                                                                                                                                                                          ?.location
                                                                                                                                                                                                                                          ?.hostname ===
                                                                                                                                                                                                                                          'localhost' ||
                                                                                                                                                                                                                                      globalThis
                                                                                                                                                                                                                                          ?.window
                                                                                                                                                                                                                                          ?.location
                                                                                                                                                                                                                                          ?.hostname ===
                                                                                                                                                                                                                                          '127.0.0.1'
                                                                                                                                                                                                                                    ? '/graphql/zworpshop'
                                                                                                                                                                                                                                    : globalThis
                                                                                                                                                                                                                                            ?.window
                                                                                                                                                                                                                                            ?.location
                                                                                                                                                                                                                                            ?.hostname ===
                                                                                                                                                                                                                                            'localhost' ||
                                                                                                                                                                                                                                        globalThis
                                                                                                                                                                                                                                            ?.window
                                                                                                                                                                                                                                            ?.location
                                                                                                                                                                                                                                            ?.hostname ===
                                                                                                                                                                                                                                            '127.0.0.1'
                                                                                                                                                                                                                                      ? '/graphql/zworpshop'
                                                                                                                                                                                                                                      : globalThis
                                                                                                                                                                                                                                              ?.window
                                                                                                                                                                                                                                              ?.location
                                                                                                                                                                                                                                              ?.hostname ===
                                                                                                                                                                                                                                              'localhost' ||
                                                                                                                                                                                                                                          globalThis
                                                                                                                                                                                                                                              ?.window
                                                                                                                                                                                                                                              ?.location
                                                                                                                                                                                                                                              ?.hostname ===
                                                                                                                                                                                                                                              '127.0.0.1'
                                                                                                                                                                                                                                        ? '/graphql/zworpshop'
                                                                                                                                                                                                                                        : globalThis
                                                                                                                                                                                                                                                ?.window
                                                                                                                                                                                                                                                ?.location
                                                                                                                                                                                                                                                ?.hostname ===
                                                                                                                                                                                                                                                'localhost' ||
                                                                                                                                                                                                                                            globalThis
                                                                                                                                                                                                                                                ?.window
                                                                                                                                                                                                                                                ?.location
                                                                                                                                                                                                                                                ?.hostname ===
                                                                                                                                                                                                                                                '127.0.0.1'
                                                                                                                                                                                                                                          ? '/graphql/zworpshop'
                                                                                                                                                                                                                                          : globalThis
                                                                                                                                                                                                                                                  ?.window
                                                                                                                                                                                                                                                  ?.location
                                                                                                                                                                                                                                                  ?.hostname ===
                                                                                                                                                                                                                                                  'localhost' ||
                                                                                                                                                                                                                                              globalThis
                                                                                                                                                                                                                                                  ?.window
                                                                                                                                                                                                                                                  ?.location
                                                                                                                                                                                                                                                  ?.hostname ===
                                                                                                                                                                                                                                                  '127.0.0.1'
                                                                                                                                                                                                                                            ? '/graphql/zworpshop'
                                                                                                                                                                                                                                            : globalThis
                                                                                                                                                                                                                                                    ?.window
                                                                                                                                                                                                                                                    ?.location
                                                                                                                                                                                                                                                    ?.hostname ===
                                                                                                                                                                                                                                                    'localhost' ||
                                                                                                                                                                                                                                                globalThis
                                                                                                                                                                                                                                                    ?.window
                                                                                                                                                                                                                                                    ?.location
                                                                                                                                                                                                                                                    ?.hostname ===
                                                                                                                                                                                                                                                    '127.0.0.1'
                                                                                                                                                                                                                                              ? '/graphql/zworpshop'
                                                                                                                                                                                                                                              : globalThis
                                                                                                                                                                                                                                                      ?.window
                                                                                                                                                                                                                                                      ?.location
                                                                                                                                                                                                                                                      ?.hostname ===
                                                                                                                                                                                                                                                      'localhost' ||
                                                                                                                                                                                                                                                  globalThis
                                                                                                                                                                                                                                                      ?.window
                                                                                                                                                                                                                                                      ?.location
                                                                                                                                                                                                                                                      ?.hostname ===
                                                                                                                                                                                                                                                      '127.0.0.1'
                                                                                                                                                                                                                                                ? '/graphql/zworpshop'
                                                                                                                                                                                                                                                : globalThis
                                                                                                                                                                                                                                                        ?.window
                                                                                                                                                                                                                                                        ?.location
                                                                                                                                                                                                                                                        ?.hostname ===
                                                                                                                                                                                                                                                        'localhost' ||
                                                                                                                                                                                                                                                    globalThis
                                                                                                                                                                                                                                                        ?.window
                                                                                                                                                                                                                                                        ?.location
                                                                                                                                                                                                                                                        ?.hostname ===
                                                                                                                                                                                                                                                        '127.0.0.1'
                                                                                                                                                                                                                                                  ? '/graphql/zworpshop'
                                                                                                                                                                                                                                                  : globalThis
                                                                                                                                                                                                                                                          ?.window
                                                                                                                                                                                                                                                          ?.location
                                                                                                                                                                                                                                                          ?.hostname ===
                                                                                                                                                                                                                                                          'localhost' ||
                                                                                                                                                                                                                                                      globalThis
                                                                                                                                                                                                                                                          ?.window
                                                                                                                                                                                                                                                          ?.location
                                                                                                                                                                                                                                                          ?.hostname ===
                                                                                                                                                                                                                                                          '127.0.0.1'
                                                                                                                                                                                                                                                    ? '/graphql/zworpshop'
                                                                                                                                                                                                                                                    : globalThis
                                                                                                                                                                                                                                                            ?.window
                                                                                                                                                                                                                                                            ?.location
                                                                                                                                                                                                                                                            ?.hostname ===
                                                                                                                                                                                                                                                            'localhost' ||
                                                                                                                                                                                                                                                        globalThis
                                                                                                                                                                                                                                                            ?.window
                                                                                                                                                                                                                                                            ?.location
                                                                                                                                                                                                                                                            ?.hostname ===
                                                                                                                                                                                                                                                            '127.0.0.1'
                                                                                                                                                                                                                                                      ? '/graphql/zworpshop'
                                                                                                                                                                                                                                                      : globalThis
                                                                                                                                                                                                                                                              ?.window
                                                                                                                                                                                                                                                              ?.location
                                                                                                                                                                                                                                                              ?.hostname ===
                                                                                                                                                                                                                                                              'localhost' ||
                                                                                                                                                                                                                                                          globalThis
                                                                                                                                                                                                                                                              ?.window
                                                                                                                                                                                                                                                              ?.location
                                                                                                                                                                                                                                                              ?.hostname ===
                                                                                                                                                                                                                                                              '127.0.0.1'
                                                                                                                                                                                                                                                        ? '/graphql/zworpshop'
                                                                                                                                                                                                                                                        : globalThis
                                                                                                                                                                                                                                                                ?.window
                                                                                                                                                                                                                                                                ?.location
                                                                                                                                                                                                                                                                ?.hostname ===
                                                                                                                                                                                                                                                                'localhost' ||
                                                                                                                                                                                                                                                            globalThis
                                                                                                                                                                                                                                                                ?.window
                                                                                                                                                                                                                                                                ?.location
                                                                                                                                                                                                                                                                ?.hostname ===
                                                                                                                                                                                                                                                                '127.0.0.1'
                                                                                                                                                                                                                                                          ? '/graphql/zworpshop'
                                                                                                                                                                                                                                                          : globalThis
                                                                                                                                                                                                                                                                  ?.window
                                                                                                                                                                                                                                                                  ?.location
                                                                                                                                                                                                                                                                  ?.hostname ===
                                                                                                                                                                                                                                                                  'localhost' ||
                                                                                                                                                                                                                                                              globalThis
                                                                                                                                                                                                                                                                  ?.window
                                                                                                                                                                                                                                                                  ?.location
                                                                                                                                                                                                                                                                  ?.hostname ===
                                                                                                                                                                                                                                                                  '127.0.0.1'
                                                                                                                                                                                                                                                            ? '/graphql/zworpshop'
                                                                                                                                                                                                                                                            : globalThis
                                                                                                                                                                                                                                                                    ?.window
                                                                                                                                                                                                                                                                    ?.location
                                                                                                                                                                                                                                                                    ?.hostname ===
                                                                                                                                                                                                                                                                    'localhost' ||
                                                                                                                                                                                                                                                                globalThis
                                                                                                                                                                                                                                                                    ?.window
                                                                                                                                                                                                                                                                    ?.location
                                                                                                                                                                                                                                                                    ?.hostname ===
                                                                                                                                                                                                                                                                    '127.0.0.1'
                                                                                                                                                                                                                                                              ? '/graphql/zworpshop'
                                                                                                                                                                                                                                                              : globalThis
                                                                                                                                                                                                                                                                      ?.window
                                                                                                                                                                                                                                                                      ?.location
                                                                                                                                                                                                                                                                      ?.hostname ===
                                                                                                                                                                                                                                                                      'localhost' ||
                                                                                                                                                                                                                                                                  globalThis
                                                                                                                                                                                                                                                                      ?.window
                                                                                                                                                                                                                                                                      ?.location
                                                                                                                                                                                                                                                                      ?.hostname ===
                                                                                                                                                                                                                                                                      '127.0.0.1'
                                                                                                                                                                                                                                                                ? '/graphql/zworpshop'
                                                                                                                                                                                                                                                                : globalThis
                                                                                                                                                                                                                                                                        ?.window
                                                                                                                                                                                                                                                                        ?.location
                                                                                                                                                                                                                                                                        ?.hostname ===
                                                                                                                                                                                                                                                                        'localhost' ||
                                                                                                                                                                                                                                                                    globalThis
                                                                                                                                                                                                                                                                        ?.window
                                                                                                                                                                                                                                                                        ?.location
                                                                                                                                                                                                                                                                        ?.hostname ===
                                                                                                                                                                                                                                                                        '127.0.0.1'
                                                                                                                                                                                                                                                                  ? '/graphql/zworpshop'
                                                                                                                                                                                                                                                                  : globalThis
                                                                                                                                                                                                                                                                          ?.window
                                                                                                                                                                                                                                                                          ?.location
                                                                                                                                                                                                                                                                          ?.hostname ===
                                                                                                                                                                                                                                                                          'localhost' ||
                                                                                                                                                                                                                                                                      globalThis
                                                                                                                                                                                                                                                                          ?.window
                                                                                                                                                                                                                                                                          ?.location
                                                                                                                                                                                                                                                                          ?.hostname ===
                                                                                                                                                                                                                                                                          '127.0.0.1'
                                                                                                                                                                                                                                                                    ? '/graphql/zworpshop'
                                                                                                                                                                                                                                                                    : globalThis
                                                                                                                                                                                                                                                                            ?.window
                                                                                                                                                                                                                                                                            ?.location
                                                                                                                                                                                                                                                                            ?.hostname ===
                                                                                                                                                                                                                                                                            'localhost' ||
                                                                                                                                                                                                                                                                        globalThis
                                                                                                                                                                                                                                                                            ?.window
                                                                                                                                                                                                                                                                            ?.location
                                                                                                                                                                                                                                                                            ?.hostname ===
                                                                                                                                                                                                                                                                            '127.0.0.1'
                                                                                                                                                                                                                                                                      ? '/graphql/zworpshop'
                                                                                                                                                                                                                                                                      : globalThis
                                                                                                                                                                                                                                                                              ?.window
                                                                                                                                                                                                                                                                              ?.location
                                                                                                                                                                                                                                                                              ?.hostname ===
                                                                                                                                                                                                                                                                              'localhost' ||
                                                                                                                                                                                                                                                                          globalThis
                                                                                                                                                                                                                                                                              ?.window
                                                                                                                                                                                                                                                                              ?.location
                                                                                                                                                                                                                                                                              ?.hostname ===
                                                                                                                                                                                                                                                                              '127.0.0.1'
                                                                                                                                                                                                                                                                        ? '/graphql/zworpshop'
                                                                                                                                                                                                                                                                        : globalThis
                                                                                                                                                                                                                                                                                ?.window
                                                                                                                                                                                                                                                                                ?.location
                                                                                                                                                                                                                                                                                ?.hostname ===
                                                                                                                                                                                                                                                                                'localhost' ||
                                                                                                                                                                                                                                                                            globalThis
                                                                                                                                                                                                                                                                                ?.window
                                                                                                                                                                                                                                                                                ?.location
                                                                                                                                                                                                                                                                                ?.hostname ===
                                                                                                                                                                                                                                                                                '127.0.0.1'
                                                                                                                                                                                                                                                                          ? '/graphql/zworpshop'
                                                                                                                                                                                                                                                                          : globalThis
                                                                                                                                                                                                                                                                                  ?.window
                                                                                                                                                                                                                                                                                  ?.location
                                                                                                                                                                                                                                                                                  ?.hostname ===
                                                                                                                                                                                                                                                                                  'localhost' ||
                                                                                                                                                                                                                                                                              globalThis
                                                                                                                                                                                                                                                                                  ?.window
                                                                                                                                                                                                                                                                                  ?.location
                                                                                                                                                                                                                                                                                  ?.hostname ===
                                                                                                                                                                                                                                                                                  '127.0.0.1'
                                                                                                                                                                                                                                                                            ? '/graphql/zworpshop'
                                                                                                                                                                                                                                                                            : globalThis
                                                                                                                                                                                                                                                                                    ?.window
                                                                                                                                                                                                                                                                                    ?.location
                                                                                                                                                                                                                                                                                    ?.hostname ===
                                                                                                                                                                                                                                                                                    'localhost' ||
                                                                                                                                                                                                                                                                                globalThis
                                                                                                                                                                                                                                                                                    ?.window
                                                                                                                                                                                                                                                                                    ?.location
                                                                                                                                                                                                                                                                                    ?.hostname ===
                                                                                                                                                                                                                                                                                    '127.0.0.1'
                                                                                                                                                                                                                                                                              ? '/graphql/zworpshop'
                                                                                                                                                                                                                                                                              : globalThis
                                                                                                                                                                                                                                                                                      ?.window
                                                                                                                                                                                                                                                                                      ?.location
                                                                                                                                                                                                                                                                                      ?.hostname ===
                                                                                                                                                                                                                                                                                      'localhost' ||
                                                                                                                                                                                                                                                                                  globalThis
                                                                                                                                                                                                                                                                                      ?.window
                                                                                                                                                                                                                                                                                      ?.location
                                                                                                                                                                                                                                                                                      ?.hostname ===
                                                                                                                                                                                                                                                                                      '127.0.0.1'
                                                                                                                                                                                                                                                                                ? '/graphql/zworpshop'
                                                                                                                                                                                                                                                                                : globalThis
                                                                                                                                                                                                                                                                                        ?.window
                                                                                                                                                                                                                                                                                        ?.location
                                                                                                                                                                                                                                                                                        ?.hostname ===
                                                                                                                                                                                                                                                                                        'localhost' ||
                                                                                                                                                                                                                                                                                    globalThis
                                                                                                                                                                                                                                                                                        ?.window
                                                                                                                                                                                                                                                                                        ?.location
                                                                                                                                                                                                                                                                                        ?.hostname ===
                                                                                                                                                                                                                                                                                        '127.0.0.1'
                                                                                                                                                                                                                                                                                  ? '/graphql/zworpshop'
                                                                                                                                                                                                                                                                                  : globalThis
                                                                                                                                                                                                                                                                                          ?.window
                                                                                                                                                                                                                                                                                          ?.location
                                                                                                                                                                                                                                                                                          ?.hostname ===
                                                                                                                                                                                                                                                                                          'localhost' ||
                                                                                                                                                                                                                                                                                      globalThis
                                                                                                                                                                                                                                                                                          ?.window
                                                                                                                                                                                                                                                                                          ?.location
                                                                                                                                                                                                                                                                                          ?.hostname ===
                                                                                                                                                                                                                                                                                          '127.0.0.1'
                                                                                                                                                                                                                                                                                    ? '/graphql/zworpshop'
                                                                                                                                                                                                                                                                                    : 'https://graphql.zworpshop.com',

        ...options,
        queryRoot: typeMap.Query!,
        mutationRoot: typeMap.Mutation!,
        subscriptionRoot: typeMap.Subscription!
    }) as any
}

export const everything = {
    __scalar: true
}

export type QueryResult<fields extends QueryGenqlSelection> = FieldsSelection<
    Query,
    fields
>
export const generateQueryOp: (
    fields: QueryGenqlSelection & { __name?: string }
) => GraphqlOperation = function (fields) {
    return generateGraphqlOperation('query', typeMap.Query!, fields as any)
}

export { GenqlError } from '../runtime/index.js'
