package(default_visibility = ["//visibility:public"])

load("@build_bazel_rules_typescript//:defs.bzl", "ts_library")

ts_library(
  name = "app",
  srcs = ["app.ts"],
  deps = [
    "@npm//got",
  ],
)

load("@build_bazel_rules_nodejs//:defs.bzl", "nodejs_binary")

nodejs_binary(
  name = "bundle",
  data = [":app"],
  entry_point = "app.js",
)
